import { AutocompleteMockFields } from './components/autocomplete.mock';
import { ButtonMockFields } from './components/button.mock';
import { CardMockFields } from './components/card.mock';
import { CascaderMockFields } from './components/cascader.mock';
import { CheckboxMockFields } from './components/checkbox.mock';
import { DatePickerMockFields } from './components/date-picker.mock';
import { InputNumberMockFields } from './components/input-number.mock';
import { InputMockFields } from './components/input.mock';
import { MentionMockFields } from './components/mention.mock';
import { RadioMockFields } from './components/radio.mock';
import { RateMockFields } from './components/rate.mock';
import { RepeatMockFields } from './components/repeat.mock';
import { SelectMockFields } from './components/select.mock';
import { SliderMockFields } from './components/slider.mock';
import { StepsMockFields } from './components/steps.mock';
import { SwitchMockFields } from './components/switch.mock';
import { TableMockFields } from './components/table.mock';
import { TimePickerMockFields } from './components/time-picker.mock';
import { TransferMockFields } from './components/transfer.mock';
import { TreeSelectMockFields } from './components/tree-select.mock';
import { UploadMockFields } from './components/upload.mock';
import { ModalMockFields } from './components/modal.mock';

const list100 = [...Array(200).keys()].map((item, index) => {
  return {
    id: index,
    key: index,
    name: '🐛 [BUG ' + index + ']无法创建工程npm create umi',
    age: index % 100,
    address: 'JNew York No. 1 Lake Park',
  }
})


export const components = [
  {
    id: 'autocomplete',
    fields: AutocompleteMockFields,
    info: {
      title: 'Autocomplete自动完成',
      content: '输入框自动完成功能。'
    }
  },
  {
    id: 'button',
    fields: ButtonMockFields,
    info: {
      title: 'Button 按钮',
      content: '按钮用于开始一个即时操作。'
    }
  },
  {
    id: 'card',
    fields: CardMockFields,
    info: {
      title: 'Card卡片',
      content: '通用卡片容器。'
    }
  },
  {
    id: 'cascader',
    fields: CascaderMockFields,
    info: {
      title: 'Cascader级联选择',
      content: '级联选择框。'
    }
  },
  {
    id: 'checkbox',
    fields: CheckboxMockFields,
    info: {
      title: 'Checkbox多选框',
      content: '多选框。'
    }
  },
  {
    id: 'date-picker',
    fields: DatePickerMockFields,
    data: {},
    info: {
      title: 'DatePicker日期选择框',
      content: '输入或选择日期的控件'
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
    id: 'mention',
    fields: MentionMockFields,
    data: {},
    info: {
      title: 'Mention提及',
      content: '提及组件。'
    }
  },
  {
    id: 'radio',
    fields: RadioMockFields,
    data: {},
    info: {
      title: 'Radio单选框',
      content: '单选框。'
    }
  },
  {
    id: 'rate',
    fields: RateMockFields,
    data: {},
    info: {
      title: 'Rate评分',
      content: '评分组件。'
    }
  },
  {
    id: 'select',
    fields: SelectMockFields,
    data: {},
    info: {
      title: 'Select选择器',
      content: '下拉选择器。'
    }
  },
  {
    id: 'slider',
    fields: SliderMockFields,
    data: {},
    info: {
      title: 'Slider滑动输入条',
      content: '滑动型输入器，展示当前值和可选范围。'
    }
  },
  {
    id: 'steps',
    fields: StepsMockFields,
    data: {},
    info: {
      title: 'InputNumber数字输入框',
      content: '通过鼠标或键盘，输入范围内的数值。'
    }
  },
  {
    id: 'switch',
    fields: SwitchMockFields,
    data: {},
    info: {
      title: 'Switch开关',
      content: '开关选择器。'
    }
  },
  {
    id: 'time-picker',
    fields: TimePickerMockFields,
    data: {},
    info: {
      title: 'TimePicker时间选择框',
      content: '输入或选择时间的控件。'
    }
  },
  {
    id: 'transfer',
    fields: TransferMockFields,
    data: {},
    info: {
      title: 'Transfer穿梭框',
      content: '双栏穿梭选择框。'
    }
  },
  {
    id: 'tree-select',
    fields: TreeSelectMockFields,
    data: {},
    info: {
      title: 'TreeSelect树选择',
      content: '树型选择控件。'
    }
  },
  {
    id: 'upload',
    fields: UploadMockFields,
    data: {},
    info: {
      title: 'Upload上传',
      content: '文件选择上传和拖拽上传控件。'
    }
  },
  {
    id: 'table',
    fields: TableMockFields,
    data: {
      list: list100
    },

    info: {
      title: 'Table表格',
      content: '展示行列数据。'
    }
  },
  {
    id: 'repeat',
    fields: RepeatMockFields,
    data: {
      list: list100
    },

    info: {
      title: 'Table表格',
      content: '展示行列数据。'
    }
  },
  {
    id: 'modal',
    fields: ModalMockFields,
    data: {

    },
    info: {
      title: 'Table表格',
      content: '展示行列数据。'
    }
  },

  
]
