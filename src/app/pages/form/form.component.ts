import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

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
    this.form.valueChanges.subscribe(item => {
      console.log(item)
    })

    console.log(this.templatePortalContent)
  }

  form = new FormGroup({});

  model = {
    card: 'card',
  }
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'card',
      key: 'card',
      templateOptions: {
        icon: 'download',
        nzTitle: 'card',
        click: (field, $event) => {
          console.log(field.name)
        },
        extraField: (cardField: FormlyFieldConfig) => {
          return [
            {
              type: 'button',
              templateOptions: {
                text: '编辑',
                type: 'step-backward',
                click: (field: FormlyFieldConfig, $event: any) => {

                }
              }
            }
          ]
        }
      },
      fieldGroup: [
        {
          type: 'input',
          key: 'name',
          templateOptions: {
            required: true,
            label: '姓名'
          },
        },
      ]
    },
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }

  ngAfterViewInit () {
  }
}
