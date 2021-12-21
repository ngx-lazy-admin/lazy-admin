import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
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
  ) {}

  ngOnInit(): void { }

  form = new FormGroup({});

  model = {
    name: 1,
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'steps',
      key: 'name',
      className: "w-50 d-block",
      wrappers: ['inline'],
      templateOptions: {
        label: "姓名",
        required: true,
        placeholder: '姓名',
        readonly: true,
        nzShowArrow: false,
        status: 'wait',
        configOptions: [
          {
            label: 'Finished',
            description: 'This is a description.'
          },
          {
            label: 'In Progress',
            description: 'This is a description.'
          },
          {
            label: 'Waiting',
            description: 'This is a description.'
          },
        ]
      }
    },
    {
      type: 'button',
      templateOptions: {
        text: '下一步',
        click: (field, $event) => {
          console.log(field)
          field.form?.root.get('name')?.patchValue(field.form?.root.get('name')?.value + 1)
          this.cd.detectChanges();
        }
      }
    },
    {
      type: 'button',
      templateOptions: {
        text: '上一步',
        click: (field, $event) => {
          console.log(field)
          field.form?.root.get('name')?.patchValue(field.form?.root.get('name')?.value - 1)
          this.cd.detectChanges(); 
        }
      }
    }
  ];

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
