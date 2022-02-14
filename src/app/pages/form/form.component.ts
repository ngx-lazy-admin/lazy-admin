import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, ViewChild, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FieldService } from 'src/app/api/field';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { inNextTick } from 'ng-zorro-antd/core/util';
import { takeUntil } from 'rxjs/operators';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface headerInfoType {
  title: string,
  content: string,
  subtitle: string,
}

export interface errorResultType {
  status: string,
  subTitle: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-3 d-block',
  }
})
export class FormComponent {

  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  templatePortal!: TemplatePortal<any>;

  rooterChange?: Subscription;

  info?: headerInfoType | null;

  form = new FormGroup({});

  model: any = {
    name: 1,
  }

  options: FormlyFormOptions = {
    formState: {
      caches: '1'
    }
  };
  fields: FormlyFieldConfig[] = []

  loading: boolean = true;
  status = 200;

  routeCache : any= {};

  private destroy$ = new Subject<void>();

  errResult = {

  }

  constructor(
    private cd: ChangeDetectorRef,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private viewContainerRef: ViewContainerRef
  ) {
    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.routeCache[this.router.url]) {
          this.model = {}
          this.render(this.routeCache[this.router.url])
        } else {
          this.clearData()
          this.loading = true;
        }

        this.fieldService.getField(this.router.url).subscribe(result => {
          this.routeCache[this.router.url] = result;
          this.render(result)
        }, err => {
          this.errResult = err;
          this.loading = false;
          this.status = err?.status
          this.clearData();
        })
      }
    });
  }

  render (result: any) {
    if (typeof result?.fields === 'string') {
      try {
        this.fields = this.execEval(result?.fields);
        this.model = result?.data;
        this.info = result?.info;
      } catch (error) {
        console.log(error);
      }
    } else {
      if (result.fields) {
        try {
          this.fields = result.fields;
          this.model = result?.data;
          this.info = result?.info;
        } catch (error) {
          console.log(error);
        }
      }
    }

    this.status = 200;
    this.loading = false;
    this.cd.detectChanges();
  }

  submit (form: FormGroup) {
    form.markAsDirty();
    console.log(form);
  }

  domPortal!: any;
  ngAfterViewInit() {

    this.templatePortal = new TemplatePortal(this.templatePortalContent, this.viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  resetForm(): void {
    setTimeout(() => {
      this.options.parentForm?.resetForm();
      this.form.markAsUntouched();
      console.log('resetForm')
    }, 0);
  }

  clearData () {
    this.fields = [];
    this.model = {};
    this.info = null;
    this.form.reset();
    this.cd.detectChanges();
  }


  private setup(): void {
    // The `setup()` is invoked when the Monaco editor is loaded. This may happen asynchronously for the first
    // time, and it'll always happen synchronously afterwards. The first `setup()` invokation is outside the Angular
    // zone, but further invokations will happen within the Angular zone. We call the `setModel()` on the editor
    // instance, which tells Monaco to add event listeners lazily internally (`mousemove`, `mouseout`, etc.).
    // We should avoid adding them within the Angular zone since this will drastically affect the performance.
    this.ngZone.runOutsideAngular(() =>
      inNextTick()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {

        })
    );
  }

  execFunction = (name: string) => (new Function( 'return ' + name))();

  execEval = (code: string) => eval('(' + code + ')')

  // ngAfterViewInit () {}

  ngOnDestroy() {
    if (this.rooterChange) {
      this.rooterChange.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
