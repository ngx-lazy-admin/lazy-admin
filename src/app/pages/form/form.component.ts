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
    text: 'text',
    select: '1',
    UserName: 'Zhou Maomao', 
    Telephone: '18100000000', 
    Live: 'Hangzhou, Zhejiang',
    Remark: 'Template <script>alert("0wned")</script> <b>Syntax</b>',
    list: [{
      indexs: 1,
      name: `Edward`,
      age: 1,
      tagList: ['ss'],
      address: `London`,
      date: 1
    }, {
      indexs: 2,
      name: `🐛 [BUG]无法创建工程npm creat`,
      age: 2,
      address: `London2`,
      tagList: ['ss'],
      date: 2
    },{
      indexs: 2,
      name: `Edward2`,
      age: 2,
      tagList: ['ss'],
      address: `London2`,
      date: 2
    },{
      indexs: 2,
      name: `Edward2`,
      tagList: ['ss'],
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

          let listgroup = field.form?.get('list');
          let listField = (listgroup as any)._fields[0]

          // fieldChange(listField, list)
    
          // let i = listField.fieldGroup.length;
          
          // if (!listField.model) {
          //   assignFieldValue(listField, []);
          // }
      
          // listField.model.splice(0, i, list[0], ...clone(list));
          // listField.options._buildForm();
        }
      },
    },
    {
      key: 'list',
      type: 'virtual-table',
      fieldArray: {
        fieldGroup: [

          {
            type: 'input',
            key: 'name',
            templateOptions: {
              label: '序列'
            }
          },
          {
            type: 'tag',
            key: 'indexs',
            templateOptions: {
              label: '序列',
              text: '食物',
            }
          },
          {
            type: 'tag-list',
            key: 'tagList',
            templateOptions: {
              label: '序列'
            }
          },
          {
            type: 'input',
            key: 'address',
            templateOptions: {
              label: '序列'
            }
          },
          {
            type: 'input',
            key: 'date',
            templateOptions: {
              label: '序列',
              nzBorderless: false
            }
          },
        ]
      }
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
