import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Profile | JeepPay' };

export default function ProfilePage() {
  return (
    <>
      <header className="bg-blue-600 text-white px-4 pt-5 pb-6"><h1 className="text-2xl font-semibold">Profile</h1></header>
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 text-center border-b"><div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center"><i className="fas fa-user text-3xl text-gray-600"></i></div><h2 className="text-xl font-semibold">Juan Dela Cruz</h2><p className="text-gray-500">+63 912 345 6789</p></div>
        <div className="p-4"><h3 className="font-semibold text-gray-700 mb-3">Account Settings</h3><ul className="space-y-1"><li className="p-3 hover:bg-gray-50 rounded cursor-pointer">Personal Information</li><li className="p-3 hover:bg-gray-50 rounded cursor-pointer">Payment Methods</li></ul></div>
      </main>
    </>
  );
}