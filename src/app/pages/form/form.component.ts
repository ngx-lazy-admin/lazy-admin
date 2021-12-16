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
    s2: 1
  }

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        text: '按钮'
      }
    },
    {
      key: 'S2',
      type: 's2'
    }
  ];

  loading = false


  onSubmit(model:any) {

    let list = []
    for (let i = 3; i < 200; i++) {
      list.push({
        index: i,
        name: `Edward`,
        age: i,
        address: `London`,
        date: i
      });
    }
    
    let listgroup = this.form.root.get('list');
    let listField = (listgroup as any)._fields[0]

    fieldChange(listField, list)
  }

  ngAfterViewInit () {}

}
