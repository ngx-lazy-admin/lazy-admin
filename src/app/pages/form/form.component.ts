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
    text: 'text',
    select: '1',
    UserName: 'Zhou Maomao', 
    Telephone: '18100000000', 
    Live: 'Hangzhou, Zhejiang',
    Remark: 'Template <script>alert("0wned")</script> <b>Syntax</b>',
    list: [{
      index: 1,
      name: `Edward`,
      age: 1,
      address: `London`,
      date: 1
    }, {
      index: 2,
      name: `Edward2`,
      age: 2,
      address: `London2`,
      date: 2
    }]
  }
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      key: 'text',
      templateOptions: {
        icon: 'download',
        click: (field, $event) => {
          console.log(field.name)
        }
      }
    },
    {
      key: 'list',
      type: 'virtual-table',
      className: 'w-25',
      templateOptions: {
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'name',
            templateOptions: {
              required: true,
              label: '姓名'
            },
          },
          {
            type: 'input',
            key: 'date',
            templateOptions: {
              label: '时间'
            },
          },
          {
            type: 'input',
            key: 'address',
            templateOptions: {
              label: 'id'
            },
          },
        ],
      }
    }
  ];

  loading = false


  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }

  ngAfterViewInit () {
    let list = []
    for (let i = 3; i < 10; i++) {
      list.push({
        index: i,
        name: `Edward`,
        age: i,
        address: `London`,
        date: i
      });
    }
    this.model.list = [...this.model.list, ...list]
    console.log(this.model)
    // this.options.resetModel();
    // this.options?.resetModel()
    this.loading = true
    this.cd.detectChanges();
  }
}
