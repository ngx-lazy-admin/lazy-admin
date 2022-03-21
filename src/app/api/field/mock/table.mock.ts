import { TableBasicMockFields, VirtualTableMockFields } from "./table";

const list100 = [...Array(100).keys()].map((item, index) => {
  return {
    id: index,
    key: index,
    name: '🐛 [BUG ' + index + ']无法创建工程npm create umi',
    age: index % 100,
    address: 'JNew York No. 1 Lake Park',
  }
})

export const table = [
  {
    id: 'basic',
    fields: TableBasicMockFields,
    data: {
      data: list100
    },
    info: {
      title: '基础表格( table basic)',
      content: 'Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.'
    }
  },
  {
    id: 'virtual-table',
    fields: VirtualTableMockFields,
    data: {
      data: list100
    },
    info: {
      title: '虚拟滚动( virtual table)',
    }
  }
]
