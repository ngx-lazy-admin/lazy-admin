import { EditorMockFields, MarkdownMockFields } from "./editor"

const list100 = [...Array(200).keys()].map((item, index) => {
  return {
    id: index,
    key: index,
    name: '🐛 [BUG ' + index + ']无法创建工程npm create umi',
    age: index % 100,
    address: 'JNew York No. 1 Lake Park',
  }
})


export const editor = [
  {
    id: 'markdown',
    fields: MarkdownMockFields,
    info: {
      title: 'markdown 编辑器',
      content: ''
    }
  },
  {
    id: 'editor',
    fields: EditorMockFields,
    info: {
      title: '富文本编辑器',
      content: ''
    }
  }
]
