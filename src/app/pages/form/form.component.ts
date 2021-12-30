import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from 'src/app/api/user';
import { FieldService } from 'src/app/api/field';

import { assignFieldValue, getFieldValue, clone, fieldChange } from '../../utils/utils';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

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
  ) {}

  ngOnInit(): void { 

    // console.log(this.route)
    // console.log(this.router)

    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   this.cd.markForCheck();

    // });

    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.cd.markForCheck();
    // })

    this.route.url.subscribe(url => {
      this.fieldService.getField(url).subscribe(field => {
        // console.log(field)
        // console.log('current route name')

        // console.log(this.router.url)
        // this.fields = this.execFunction(field)

        this.cd.markForCheck();
      })
    })

    // this.router.getCurrentNavigation()

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
    
    this.fieldService.getFieldByOf().subscribe((field: any) => {
      this.fields = field
      this.cd.markForCheck();
    })
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

}
