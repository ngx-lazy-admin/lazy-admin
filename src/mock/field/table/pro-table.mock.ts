import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const ProTableMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '基本用法',
      description: '简单的表格，最后一列是各种操作。',
    },
    fieldGroup: [
      {
        key: 'list1',
        type: 'pro-table',
        className: "d-block mb-2",
        templateOptions: {
          columns: [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              templateRef: {
                type: 'input',
                componentParams: {
                  type: 'like',
                  click: `(field, $event) => {
                    // field.formControl.setValue(field.formControl.value + 1)
                  }`
                }
              }
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              dataIndex: 'tags',
              key: 'tags',
            },
            {
              title: 'Action',
              dataIndex: 'action',
              key: 'action',
            },
          ]
        }
      }
    ]
  }
]