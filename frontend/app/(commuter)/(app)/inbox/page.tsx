import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Inbox | JeepPay' };

export default function InboxPage() {
  return (
    <>
      <header className="bg-blue-600 text-white px-4 pt-5 pb-6"><h1 className="text-2xl font-semibold">Inbox</h1></header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="text-center py-10">
          <i className="fas fa-envelope-open-text text-6xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Your inbox is empty.</p>
        </div>
      </main>
    </>
  );
}