import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
    select: '1',
    UserName: 'Zhou Maomao', 
    Telephone: '18100000000', 
    Live: 'Hangzhou, Zhejiang',
    Remark: 'Template <script>alert("0wned")</script> <b>Syntax</b>',
    Address: 'No. 18,  <script>console.log("0wned")</script> Wantang Road, Xihu District, <span class="text-primary">Hangzhou, Zhejiang, China</span>' 
  }

  fields: FormlyFieldConfig[] = []


  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }

  ngAfterViewInit () {
    console.log(this.templatePortalContent)
    this.fields = [
      {
        type: 'nz-description',
        className: 'm-5',
        templateOptions: {
          nzLabel: 'Categories',
          nzColumn: { xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }
        },
        fieldGroup: [
          {
            type: 'nz-input',
            key: 'UserName',
            templateOptions: {
              nzLabel: 'UserName',
              required: true,
            },
          },
          {
            type: 'text',
            key: 'Telephone',
            templateOptions: {
              nzLabel: 'Telephone',
            },
          },
          {
            type: 'text',
            key: 'Live',
            templateOptions: {
              nzLabel: 'Live',
            },
          },
          {
            type: 'text',
            key: 'Remark',
            templateOptions: {
              nzLabel: 'Remark',
            },
          },
          {
            type: 'text',
            key: 'Address',
            templateOptions: {
              nzLabel: 'Address',
            },
          },
        ],
      },
      {
        type: 'nz-card-tabs',
        className: 'd-block mx-2',
        templateOptions: {
          nzTitle: 'Card title',
          extraFields: [
            {
              type: 'nz-input',
              key: 'UserName',
              className: 'd-inline-block mx-2',
              defaultValue: '11',
              templateOptions: {
                nzLabel: 'UserName',
                required: true,
              },
            },
            {
              type: 'nz-button',
              key: 'UserName',
              defaultValue: '11',
              className: 'd-inline-block',
              templateOptions: {
                nzLabel: 'UserName',
                text: '确定',
                click: (fields: any, $event: any) => {
                  console.log(fields)
                }
              },
            },
          ],
          click: (field, $event) => {
            if (field?.templateOptions) {
              // field.templateOptions.nzExtra = this.templatePortalContent;
            }
          }
        },
        fieldGroup: [
          {
            type: 'nz-input',
            key: 'UserName',
            templateOptions: {
              nzLabel: 'UserName',
              required: true,
            },
          },
          {
            type: 'text',
            key: 'Telephone',
            templateOptions: {
              nzLabel: 'Telephone',
            },
          },
          {
            type: 'text',
            key: 'Live',
            templateOptions: {
              nzLabel: 'Live',
            },
          },
          {
            type: 'text',
            key: 'Remark',
            templateOptions: {
              nzLabel: 'Remark',
            },
          },
          {
            type: 'text',
            key: 'Address',
            templateOptions: {
              nzLabel: 'Address',
            },
          },
        ],
      }
    ];
    // this.form = new FormGroup({});
    console.log(this.fields)

    console.log('23333')

    // this.cd.markForCheck();

    this.cd.detectChanges();
  }
}
