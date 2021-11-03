import { render, fireEvent, waitFor, act } from "@testing-library/react";
import TransactionForm from "./TransactionForm";

test("checking if the functions is getting called with correct input", async () => {
  const handleSubmit = jest.fn();

  const component = render(
    <TransactionForm
      addTransactionAction={handleSubmit}
      expense={0}
      income={100}
    />
  );
  const textInputEl = component.getByTestId("text");
  const amountInputEl = component.getByTestId("amount");
  const btnEl = component.getByTestId("submit-btn");

  //function should be called coz balance is greater than expense
  act(() => {
    fireEvent.change(textInputEl, { target: { value: "Book" } });
    fireEvent.change(amountInputEl, { target: { value: -40 } });
  });
  fireEvent.click(btnEl);
  await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith("Book", -40));

  //function should be called coz adding balance
  act(() => {
    fireEvent.change(textInputEl, { target: { value: "Payment" } });
    fireEvent.change(amountInputEl, { target: { value: 400 } });
  });
  fireEvent.click(btnEl);
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith("Payment", 400)
  );
});
