import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

export const AntdTableMockFields = [
  {
    type: 'code-card',
    className: "d-block mb-3 col-12",
    templateOptions: {
      title: '按钮类型',
      description: '按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。',
    },
    fieldGroup: [
      {
        key: 'list',
        type: 'antd-table',
        className: "d-block mb-2",
        templateOptions: {
          columns: [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ]
        }
      }
    ]
  }
]