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
    text: 'text',
    select: '1',
    UserName: 'Zhou Maomao', 
    Telephone: '18100000000', 
    Live: 'Hangzhou, Zhejiang',
    Remark: 'Template <script>alert("0wned")</script> <b>Syntax</b>',
    Address: 'No. 18,  <script>console.log("0wned")</script> Wantang Road, Xihu District, <span class="text-primary">Hangzhou, Zhejiang, China</span>' 
  }

  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      key: 'text',
      templateOptions: {
        icon: 'download',
        nzType: 'primary',
        click: (field, $event) => {
          console.log(field.name)
        }
      }
    },
    {
      type: 'nz-button-group',
      className: 'w-25',
      templateOptions: {
        groupOptions: [
          {
            label: '增加',
            click: (field: any, $event: any) => {

            }
          },
          {
            label: '删除'
          },
          {
            label: '修改'
          },
          {
            label: '导出'
          }
        ]
      }
    }
  ];


  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }

  ngAfterViewInit () {

  }
}
