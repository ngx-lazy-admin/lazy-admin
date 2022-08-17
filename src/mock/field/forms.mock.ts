import {
  DefaultValueMockFields,
  ExpressionMockFields,
  HideFieldsMockFields,
  IntroductionMockFields,
  ModalOptionsMockFields
} from "./forms"

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
  },
  {
    id: 'model-options',
    fields: ModalOptionsMockFields
  }
]
