import DarkMode from "./components/DarkMode";
import { History } from "./components/History";
import TrackerCard from "./components/TrackerCard";
import TransactionForm from "./components/TransactionForm";
import { useExpenseTracker } from "./hooks/useExpenseTracker";

export default function App() {
  const [state, actions] = useExpenseTracker();

  return (
    <div className="flex justify-center py-5 min-h-screen md:items-center bg-gray-200 dark:bg-black dark:text-white">
      <div className="w-80 md:w-96">
        <DarkMode />
        <TrackerCard state={state} />
        {state.histories.length ? (
          <History histories={state.histories} />
        ) : null}
        <TransactionForm
          income={state.income}
          expense={state.expense}
          addTransactionAction={actions.addTransactionAction}
        />
      </div>
    </div>
  );
}
