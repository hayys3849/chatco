'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/app/(commuter)/types';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { id: 1, name: 'Home', icon: 'fa-home', href: '/commuter/final' },
    { id: 2, name: 'Inbox', icon: 'fa-envelope', href: '/commuter/app/inbox' },
    { id: 3, name: 'Transactions', icon: 'fa-receipt', href: '/commuter/app/transactions' },
    { id: 4, name: 'Profile', icon: 'fa-user', href: '/commuter/app/profile' }
  ];

  return (
    <nav className="flex justify-around bg-white pt-3 pb-5 border-t border-gray-200 lg:pt-6 lg:pb-8 lg:px-8">
      {navItems.map(item => (
        <Link key={item.id} href={item.href} className={`flex flex-col items-center cursor-pointer transition-colors ${
          pathname === item.href ? 'text-blue-600' : 'text-gray-500'
        }`}>
          <i className={`fas ${item.icon} text-xl mb-1 lg:text-2xl`}></i>
          <span className="text-xs lg:text-sm">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;