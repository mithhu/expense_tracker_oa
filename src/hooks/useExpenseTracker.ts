import React from "react";
import { IhistoryProps, ItrackerState } from "../interface";

const initialValue = {
  income: 0,
  expense: 0,
  totalAmount: 0,
  histories: [],
};

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
    case "SET_AMOUNT": {
      return { ...state, totalAmount: action.payload };
    }
    case "SET_TRACKER_COUNT": {
      const previousState = { ...state };
      //income when amount is positive
      previousState.income +=
        action.payload.amount > 0 ? Number(action.payload.amount) : 0;

      //expense when amount is negative
      previousState.expense -=
        action.payload.amount < 0 ? Number(action.payload.amount) : 0;
      //neagtive and negative makes positive. ex. 0 - (-100) = 100;

      previousState.totalAmount += Number(action.payload.amount);

      previousState.histories = [
        ...previousState.histories,
        {
          amount: Number(action.payload.amount),
          text: action.payload.text,
        },
      ];

      console.log(previousState);

      return previousState;
    }

    default: {
      throw new Error("Action type not found");
    }
  }
}

export function useExpenseTracker(): [
  state: {
    income: number;
    expense: number;
    totalAmount: number;
    histories: IhistoryProps[];
  },
  action: {
    addTransactionAction: (txet: string, amount: number) => void;
  }
] {
  const [state, dispatch] = React.useReducer(trackerReducer, initialValue);

  function addTransactionAction(text: string, amount: number) {
    dispatch({
      type: "SET_TRACKER_COUNT",
      payload: {
        text,
        amount,
      },
    });
  }

  return [
    {
      income: state.income,
      totalAmount: state.totalAmount,
      histories: state.histories,
      expense: state.expense,
    },
    { addTransactionAction },
  ];
}
