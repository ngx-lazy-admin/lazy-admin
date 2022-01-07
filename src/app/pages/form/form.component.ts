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
        this.cd.markForCheck();

        this.loading = false;

        // return
        this.fieldService.getField(this.router.url).subscribe(result => {

          if (typeof result?.fields === 'string') {
            try {
              // 1. 使用eval
              this.fields =  this.execEval(result?.fields)
              this.cd.markForCheck();
            } catch (error) {
              console.log(error)
            }
          } else {
            this.fields = result?.fields
          }

          this.info = result?.info;
          this.cd.markForCheck();
        }, err => {
          this.fields = [];
          this.info = null;
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
