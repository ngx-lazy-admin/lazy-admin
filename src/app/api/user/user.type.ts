import { SafeAny } from "../apis.type";

export interface User { 
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
  [key: string]: SafeAny;
}
