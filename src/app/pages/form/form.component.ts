import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FieldService } from 'src/app/api/field';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { field } from 'src/app/api/field/mock';

export interface headerInfoType {
  title: string,
  content: string,
  subtitle: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

  rooterChange?: Subscription;

  info?: headerInfoType | null;

  form = new FormGroup({});

  model = {
    name: 1,
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = []

  loading = false;

  status = 200

  private route$ = new Subject<void>();

  constructor(
    private cd: ChangeDetectorRef,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
  ) {
    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loading = true;
        this.fields = [];
        this.cd.markForCheck();
        this.fieldService.getField(this.router.url).subscribe(result => {
          this.loading = false;
          this.cd.markForCheck();
          if (typeof result?.fields === 'string') {
            try {
              this.fields = this.execEval(result?.fields);
              this.model = result?.data;
            } catch (error) {
              console.log(error);
            }
          } else {
            if (result.fields) {
              this.fields = result.fields;
            }
            this.model = result?.data;
          }
          this.status = 200;

          this.info = result?.info;
          this.cd.markForCheck();
        }, err => {
          this.fields = [];
          this.info = null;
          this.loading = false;
          this.status = err.status;
          this.cd.markForCheck();
        })
      }
    });
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
