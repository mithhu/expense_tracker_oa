import { Formik, Field, Form, ErrorMessage } from "formik";
import { Ierror, IFormProps } from "../interface";

export default function TransactionForm({
  income,
  expense,
  addTransactionAction,
}: IFormProps) {
  return (
    <Formik
      initialValues={{ text: "", amount: "" }}
      validate={(values) => {
        const errors: Ierror = {};

        if (values.text.trim().length === 0) {
          errors.text = "Text required";
        }

        if (values.amount === "") {
          errors.amount = "Amount required";
        } else if (Number(values.amount) === 0) {
          errors.amount = "Amount can not be 0";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        if (
          Number(values.amount) < 0 &&
          income < Math.abs(Number(values.amount)) + expense
        ) {
          alert("Expenses can't be greater than balance");
          return;
        }
        addTransactionAction(values.text, Number(values.amount));
        resetForm({});
      }}
    >
      {() => {
        return (
          <Form>
            <h3 className="font-semibold mb-4 mt-6 border-b-2 border-gray-300 dark:text-white">
              Add new transaction
            </h3>
            <label className="block w-full">
              <p className="mb-1 text-sm ">Text</p>
              <Field
                data-testid={"text"}
                label="Transaction text"
                type="text"
                name="text"
                placeholder="enter text..."
                className="form-input cursor-pointer w-full text-sm border-gray-300 rounded dark:bg-gray-800 p-2 shadow"
              />
              <ErrorMessage
                name="text"
                className="text-red-600 dark:text-yellow-200 pt-1 text-sm"
                component="p"
              />
            </label>

            <label className="block w-full mt-4">
              <p className="text-sm">Amount</p>
              <p className="block mb-1 text-sm">
                (negative - expense, positive - income)
              </p>
              <Field
                data-testid={"amount"}
                label="Transaction amount"
                type="number"
                name="amount"
                placeholder="enter amount..."
                className="form-input cursor-pointer w-full text-sm border-gray-300 rounded dark:bg-gray-800 p-2 shadow"
              />
              <ErrorMessage
                name="amount"
                className="text-red-600 dark:text-yellow-200 pt-1 text-sm"
                component="p"
              />
            </label>

            <button
              data-testid={"submit-btn"}
              type="submit"
              name="Add Transaction"
              className="block w-full p-3 mt-6 text-sm text-white rounded shadow dark:bg-gray-700 bg-indigo-400"
            >
              Add transaction
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
