import { DefaultValueMockFields } from "./forms/defaultvalue.mock"
import { ExpressionMockFields } from "./forms/expression.mock"
import { HideFieldsMockFields } from "./forms/hidefields.mock"
import { IntroductionMockFields } from "./forms/introduction.mock"

const list100 = [...Array(200).keys()].map((item, index) => {
  return {
    id: index,
    key: index,
    name: '🐛 [BUG ' + index + ']无法创建工程npm create umi',
    age: index % 100,
    address: 'JNew York No. 1 Lake Park',
  }
})

export const forms = [
  {
    id: 'introduction',
    fields: IntroductionMockFields
  },
  {
    id: 'expression',
    fields: ExpressionMockFields
  },
  {
    id: 'defaultValue',
    fields: DefaultValueMockFields
  },
  {
    id: 'hide-fields',
    fields: HideFieldsMockFields
  }
]
