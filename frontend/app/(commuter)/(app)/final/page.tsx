import Header from '@/app/(commuter)/components/commuter/Header';
import QuickActions from '@/app/(commuter)/components/commuter/QuickActions';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Home | JeepPay' };

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto px-4">
        <QuickActions />
      </main>
    </>
  );
}