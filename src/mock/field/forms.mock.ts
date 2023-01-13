import {
  DefaultValueMockFields,
  ExpressionMockFields,
  HideFieldsMockFields,
  IntroductionMockFields,
  ModalOptionsMockFields,
  ResetModelMockFields
} from './forms';
// import { ResetModelMockFields } from './forms/reset-model.mock';

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
  },
  {
    id: 'reset-model',
    fields: ResetModelMockFields
  }
];
