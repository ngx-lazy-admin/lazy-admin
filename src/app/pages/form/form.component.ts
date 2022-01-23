import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FieldService } from 'src/app/api/field';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

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

  rooterChange?: Subscription;

  info?: headerInfoType | null;

  form = new FormGroup({});

  model: any = {
    name: 1,
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = []

  loading = false;
  status = 200;

  routeCache : any= {};

  errResult = {

  }

  private route$ = new Subject<void>();


  constructor(
    private cd: ChangeDetectorRef,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
  ) {
    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.routeCache[this.router.url]) {
          this.render(this.routeCache[this.router.url])
        } else {
          this.init()
        }

        this.fieldService.getField(this.router.url).subscribe(result => {
          this.routeCache[this.router.url] = result;
          this.render(result)
          
        }, err => {
          this.errResult = err;
          this.fields = [];
          this.info = null;
          this.loading = false;
          this.status = err.status;
          this.cd.markForCheck();
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
        this.fields = result.fields;
        this.model = result?.data;
        this.info = result?.info;
      }
    }
    this.status = 200;
    this.loading = false;

    this.cd.markForCheck();
  }

  init () {
    this.fields = [];
    this.model = null;
    this.info = null;
    this.loading = true;
    this.cd.markForCheck();
  }

  execFunction = (name: string) => (new Function( 'return ' + name))();

  execEval = (code: string) => eval('(' + code + ')')

  ngAfterViewInit () {}

  ngOnDestroy() {
    if (this.rooterChange) {
      this.rooterChange.unsubscribe();
    }
  }
}
