import { Random } from 'mockjs';

const userRandom = () => {
  return [{
      id: Random.email()
  }];
};

export const user = userRandom()