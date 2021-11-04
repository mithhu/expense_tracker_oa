import { IhistoryProps } from "../interface";

export function History({ histories }: { histories: IhistoryProps[] }) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-4 border-b-2 border-gray-300 dark:text-white">
        History
      </h3>

      <ul className="overflow-y-auto max-h-40" data-testid={"history"}>
        {histories.map((item, idx) => {
          return (
            <li key={idx} className="pr-3 pt-2 mb-3">
              <div
                className={`flex justify-between bg-white dark:bg-gray-600 border-r-8 rounded shadow-md p-3 ${
                  item.amount > 0 ? "border-green-500" : "border-red-500"
                }`}
              >
                <p data-testid={"text"} className="break-all pr-6">
                  {item.text}
                </p>
                <p data-testid={"amount"}>
                  {item.amount > 0
                    ? `+$${item.amount}`
                    : `-$${Math.abs(item.amount)}`}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
