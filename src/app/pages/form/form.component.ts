import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from 'src/app/api/user';
import { FieldService } from 'src/app/api/field';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

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
export class FormComponent implements OnInit {

  constructor(
    private cd: ChangeDetectorRef,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
  ) {
    this.rooterChange = this.router.events.subscribe((event) => {
      // console.log(event)
      if (event instanceof NavigationEnd) {
        // const messageId = this.message.loading('加载中...').messageId
        this.loading = true;
        this.fieldService.getField(this.router.url).subscribe(result => {
          this.loading = false;
          this.fields = result?.fields;
          this.info = result?.info;
          // this.message.remove(messageId)
          this.cd.markForCheck();
        }, err => {
          this.fields = [];
          this.info = null;
          // this.message.remove(messageId)
          this.cd.markForCheck();
        })
      }
    });
  }

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

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      console.log('params')
    })

    this.route.queryParams.subscribe(params => {
      console.log('queryParams')
    });
  }




  onSubmit(model:any) {
    let data = {}
    // for (let i = 0; i < 500; i++ ) {
    //   this.model.data.push({
    //     name: 'name' + i,
    //     age: 'age' + i,
    //     address: 'address' + i,
    //     height: 'height' + i,
    //     weight: 'weight' + i
    //   })
    // }

    let lastTime = new Date().getTime()

    // this.model = JSON.parse(JSON.stringify(this.model))

    // this.fields.push({
    //   key: 'age',
    //   type: 'input'
    // })

    // this.model = clone(this.model)
    // (this.form?.optons as any)._buildForm();

    // console.log(new Date().getTime() - lastTime)
    // this.cd.detectChanges();
  }

  ngAfterViewInit () {}

  ngOnDestroy() {
    if (this.rooterChange) {
      this.rooterChange.unsubscribe();
    }
  }

}
