// import * as faker from 'faker/locale/en';
import { Random } from 'mockjs';

const userRandom = () => {
  return [{
      id: Random.email()
  }];
};

export const user = userRandom()