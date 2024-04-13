export interface IInput {
  id: number;
  title: string;
  placeholder: string;
  type: keyof IData;
}

interface IData {
  name: string;
  phone: string;
  email: string;
}

export interface IPayload {
  type: keyof IData;
  value: string;
}

export interface IState {
  data: IData;
  setData: (payload: IPayload) => void;
}
