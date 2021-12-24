import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { UserService } from 'src/app/api/user';
import { FieldService } from 'src/app/api/field';

import { assignFieldValue, getFieldValue, clone, fieldChange } from '../../utils/utils';

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
    private fieldService: FieldService
  ) {}

  ngOnInit(): void { 
    this.userServices.getUser().subscribe(res => {
      console.log(res)
    })    

    // this.http.get<FormlyFieldConfig[]>('api/filed').subscribe(res => {
    //   this.fields = res
    //   // this.model = clone(this.model)
    //   // (this.options as any)._buildForm();
    // })

    this.fieldService.getField().subscribe(field => {
      console.log(field)
      // let options = this.execFunction(field)
      // console.log(options)

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

  execFunction = (name: string) => (new Function( 'return ' + name))();

  ngAfterViewInit () {}

}
