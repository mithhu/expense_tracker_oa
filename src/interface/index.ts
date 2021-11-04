export interface IhistoryProps {
  amount: number;
  text: string;
}

export interface ItrackerState {
  totalAmount: number;
  income: number;
  expense: number;
  histories: IhistoryProps[];
}

export interface IaddTransactionFn {
  (text: string, amount: number): void;
}

export interface IFormProps {
  income: number;
  expense: number;
  addTransactionAction: IaddTransactionFn;
}

export interface Ierror {
  text?: string;
  amount?: string;
}
