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

export interface IFormProps {
  income: number;
  expense: number;
  addTransactionAction: (text: string, amount: number) => void;
}

export interface Ierror {
  text?: string;
  amount?: string;
}
