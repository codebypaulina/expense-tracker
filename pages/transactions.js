import Navbar from "@/components/Navbar";
import useSWR from "swr";

export default function TransactionsPage() {
  const { data: transactions, error } = useSWR("/api/transactions");

  if (error) return <h3>Failed to load transactions</h3>;
  if (!transactions) return <h3>Loading...</h3>;

  return (
    <>
      <h1>Transactions</h1>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <strong>{transaction.type}</strong> | {transaction.description} |
            {transaction.amount} € |
            <span>
              {transaction.category ? transaction.category.name : "No Category"}
            </span>
          </li>
        ))}
      </ul>
      <Navbar />
    </>
  );
}
