import { InitParams, LoginOptions } from './params.type';
import { LoginResponse } from './response.type';

export interface FB {
  init: (params: InitParams) => void;

  login: (
    callback: (res: LoginResponse) => void,
    options?: LoginOptions
  ) => void;

  api: (
    path: string,
    params: { fields: string },
    callback: (res: unknown) => void
  ) => void;
}