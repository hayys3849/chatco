import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Transactions | JeepPay' };

export default function TransactionsPage() {
  const transactions = [ { id: 1, name: 'Jeepney Fare', date: 'Today, 8:30 AM', amount: -15.00 }, { id: 2, name: 'Top Up', date: 'Yesterday, 5:00 PM', amount: 500.00 } ];
  return (
    <>
      <header className="bg-blue-600 text-white px-4 pt-5 pb-6"><h1 className="text-2xl font-semibold">Transactions</h1></header>
      <main className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-3">{transactions.map(t => (<li key={t.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"><div><p className="font-medium">{t.name}</p><p className="text-xs text-gray-500">{t.date}</p></div><span className={`font-bold ${t.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>{t.amount > 0 ? '+' : ''}₱{Math.abs(t.amount).toFixed(2)}</span></li>))}</ul>
      </main>
    </>
  );
}