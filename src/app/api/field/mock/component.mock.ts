import { CheckboxMockFields } from './components/checkbox.mock';
import { dataPickerFields } from './components/data-picker.mock';
import { InputNumberMockFields } from './components/input-number.mock';
import { InputMockFields } from './components/input.mock';

export const components = [
  {
    id: 'button',
    fields: `[
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Primary Button",
          type: 'primary',
          click: (field, _this) => {
            console.log(field)
            _this.message.success(field.templateOptions.text)
          }
        }
      },
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Default Button",
          type: 'default',
        }
      },
      {
        key: 'name',
        type: 'button',
        className: "d-inline-block mx-2",
        templateOptions: {
          text: "Dashed Button",
          type: 'dashed',
        }
      }
    ]`,
    info: {
      title: 'Button 按钮',
      content: '按钮用于开始一个即时操作。'
    }
  },
  {
    id: 'card',
    fields: [
      {
        key: 'card1',
        type: 'card',
        className: "d-inline-block col-lg-3 col-md-4 col-sm-6 px-2 mb-2",
        templateOptions: {
          title: "Card title1",
        },
        fieldGroup: [
          {
            type: 'input',
            className: 'col-sm-4 d-inline-block mb-2',
            templateOptions: {
              label: 'Name of Investment',
              required: true,
            },
          },
          {
            type: 'input',
            className: 'col-sm-4 d-inline-block mb-2',
            templateOptions: {
              type: 'date',
              label: 'Date of Investment:',
            },
          },
          {
            type: 'input',
            className: 'col-sm-4 d-inline-block mb-2',
            templateOptions: {
              label: 'Stock Identifier:',
            },
          },
          {
            type: 'button',
            className: 'float-end',
            templateOptions: {
              text: '提交',
              type: 'primary',
            }
          }
        ]
      }
    ],
    info: {
      title: 'Card卡片',
      content: '通用卡片容器。'
    }
  },
  {
    id: 'input',
    fields: InputMockFields,
    data: {},
    info: {
      title: 'Input输入框',
      content: '通过鼠标或键盘输入内容，是最基础的表单域的包装。'
    }
  },
  {
    id: 'input-number',
    fields: InputNumberMockFields,
    data: {},
    info: {
      title: 'InputNumber数字输入框',
      content: '通过鼠标或键盘，输入范围内的数值。'
    }
  },
  {
    id: 'checkbox',
    fields: CheckboxMockFields,
    data: {},
    info: {
      title: 'Checkbox多选框',
      content: '多选框。'
    }
  },
  {
    id: 'date-picker',
    fields: dataPickerFields,
    data: {},
    info: {
      title: 'DatePicker日期选择框',
      content: '输入或选择日期的控件'
    }
  },
]
