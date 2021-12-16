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

  
  @ViewChild('templatePortalContent', {static: true}) templatePortalContent!: TemplateRef<unknown>;

  constructor(
    private cd: ChangeDetectorRef,
  ) { 
    // this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }

  ngOnInit(): void {
    // this.form.valueChanges.subscribe(item => {
    //   console.log(item)
    // })
    console.log(this.templatePortalContent)
  }

  form = new FormGroup({});

  model = {
    name: null
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      wrappers: ['inline'],
      className: 'w-25 d-block mt-5',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        text: '按钮'
      }
    },
    {
      type: 'button',
      className: 'w-25 d-block mt-2',
      templateOptions: {
        placeholder: 'Enter email',
        text: '确定'
      }
    },
  ];

  loading = false


  onSubmit(model:any) {
    console.log(model)
  }

  ngAfterViewInit () {}

}
