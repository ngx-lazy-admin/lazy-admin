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

  ngOnInit(): void { 
    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const messageId = this.message.loading('加载中...').messageId
        this.fieldService.getField(event.url).subscribe(result => {
          this.message.remove(messageId)
          this.fields = result['field']
          this.cd.markForCheck();
        }, err => {
          this.message.remove(messageId)
          // this.message.error(err.msg)
          console.log(err)
        })
      }
    });


    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    // });

    // this.route.params.subscribe(params => {
    //   console.log(params);
    // })

    // this.route.url.subscribe(url => {
    //   console.log(url)
    //   console.log(this.route)

    // })

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

  form = new FormGroup({});

  model = {
    name: 1,
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = []

  loading = false


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
