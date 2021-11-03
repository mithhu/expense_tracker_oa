import { render } from "@testing-library/react";
import { IhistoryProps } from "../interface";
import { History } from "./History";

const histories: IhistoryProps[] = [
  { text: "Payment", amount: 400 },
  { text: "Book", amount: -50 },
  { text: "Pen", amount: -10 },
  { text: "Pencil", amount: -40 },
];

test("Testing length of transactions and checking if every text and amount is added to the histories", () => {
  const component = render(<History histories={histories} />);
  const historyEl = component.getByTestId("history");

  //no of element
  expect(historyEl.childNodes.length).toBe(4);

  const textEl = component.getAllByTestId("text");
  const amountEl = component.getAllByTestId("amount");

  //transaction text --
  [...textEl].every((el) =>
    histories.map((history) => history.text).includes(el.textContent + "")
  );
  // + "" for null issue

  //transaction amount
  [...amountEl].every((el) =>
    histories.map((history) => history.amount).includes(Number(el.textContent))
  );
});
