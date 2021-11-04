import { useReducer } from "react";
import { IaddTransactionFn, ItrackerState } from "../interface";

const initialValue = {
  income: 0,
  expense: 0,
  totalAmount: 0,
  histories: [],
};

const SET_AMOUNT = "SET_AMOUNT";
const SET_TRACKER_COUNT = "SET_TRACKER_COUNT";

function trackerReducer(
  state: ItrackerState,
  action:
    | { type: "SET_AMOUNT"; payload: number }
    | {
        type: "SET_TRACKER_COUNT";
        payload: { text: string; amount: number };
      }
) {
  switch (action.type) {
    case SET_AMOUNT: {
      return { ...state, totalAmount: action.payload };
    }
    case SET_TRACKER_COUNT: {
      const previousState = { ...state };
      //income when amount is positive
      previousState.income +=
        action.payload.amount > 0 ? Number(action.payload.amount) : 0;

      //expense when amount is negative
      previousState.expense -=
        action.payload.amount < 0 ? Number(action.payload.amount) : 0;
      //negative and negative makes positive. ex. 0 - (-100) = 100;

      previousState.totalAmount += Number(action.payload.amount);

      previousState.histories = [
        ...previousState.histories,
        {
          amount: Number(action.payload.amount),
          text: action.payload.text,
        },
      ];
      return previousState;
    }

    default: {
      throw new Error("Action type not found");
    }
  }
}

export function useExpenseTracker(): [
  state: ItrackerState,
  action: {
    addTransactionAction: IaddTransactionFn;
  }
] {
  const [state, dispatch] = useReducer(trackerReducer, initialValue);

  function addTransactionAction(text: string, amount: number) {
    dispatch({
      type: SET_TRACKER_COUNT,
      payload: {
        text,
        amount,
      },
    });
  }

  return [
    {
      income: state.income,
      expense: state.expense,
      totalAmount: state.totalAmount,
      histories: state.histories,
    },
    { addTransactionAction },
  ];
}
