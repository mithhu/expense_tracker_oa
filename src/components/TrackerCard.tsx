import { ItrackerState } from "../interface";

function TrackerCard({ state }: { state: ItrackerState }) {
  return (
    <>
      <h3 className="uppercase font-semibold text-sm">your balance</h3>
      <p className="text-3xl" data-testid={"total"}>
        ${state.totalAmount.toFixed(2)}
      </p>
      <div className="flex bg-white dark:bg-gray-700 rounded shadow-md p-4 mt-4">
        <div className="flex-1">
          <p className="text-center uppercase">income</p>
          <p
            className="text-center text-lg text-green-500 font-bold"
            data-testid={"income"}
          >
            {state.income.toFixed(2)}
          </p>
        </div>
        <div className="flex-1  border-l-2">
          <p className="text-center uppercase">expense</p>
          <p
            className="text-center text-lg text-red-500 font-bold"
            data-testid={"expense"}
          >
            {state.expense.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default TrackerCard;
