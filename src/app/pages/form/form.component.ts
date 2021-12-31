import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from 'src/app/api/user';
import { FieldService } from 'src/app/api/field';

import { assignFieldValue, getFieldValue, clone, fieldChange } from '../../utils/utils';
import { ActivatedRoute, Router, ParamMap, NavigationEnd } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

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
    private http: HttpClient,
    private userServices: UserService,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
  ) {}

  rooterChange?: Subscription;

  info?: headerInfoType | null;

  form = new FormGroup({});

  model = {
    name: 1,
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = []

  loading = false

  ngOnInit(): void { 
    console.log(this.route)
    console.log(this.router)

    this.route.params.subscribe(params => {
      console.log('params')
      console.log(params)
    })

    this.route.queryParams.subscribe(params => {
      console.log('queryParams')
    });

    this.route.url.subscribe(url => {
      console.log('url')
      const messageId = this.message.loading('加载中...').messageId
      this.fieldService.getField(this.router.url).subscribe(result => {
        this.fields = result?.fields;
        this.info = result?.info;
        this.message.remove(messageId)
        this.cd.markForCheck();
      }, err => {
        this.fields = [];
        this.info = null;
        this.message.remove(messageId)
        this.cd.markForCheck();
      })
    })

    this.rooterChange = this.router.events.subscribe((event) => {
      console.log(event)
      if (event instanceof NavigationEnd) {
        console.log(event?.url)
        console.log(this.router.url)

        const messageId = this.message.loading('加载中...').messageId
        this.fieldService.getField(this.router.url).subscribe(result => {
          this.fields = result?.fields;
          this.info = result?.info;
          this.message.remove(messageId)
          this.cd.markForCheck();
        }, err => {
          this.fields = [];
          this.info = null;
          this.message.remove(messageId)
          this.cd.markForCheck();
        })
      }
    });





    // // this.router.getCurrentNavigation()

    // this.route.paramMap.pipe(
    //   map((params: ParamMap) => params)
    // ).subscribe(res => {
    //   console.log(res)
    // });

    

    // this.route.snapshot.subscribe(params => {
    //   console.log(params)
    // })

    // this.router.navigations.this.service.function
    //   .subscribe(arg => this.property = arg);
    
    // this.fieldService.getFieldByOf().subscribe((field: any) => {
    //   this.fields = field
    //   this.cd.markForCheck();
    // })
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
