import Link from 'next/link';
import { FC } from 'react';
import { clsx } from 'clsx';

interface TabsProps {
  activeTab: string;
}

const Tabs: FC<TabsProps> = ({ activeTab }) => {
  return (
    <div className="w-full flex gap-4 py-2">
      {['All', 'Pending', 'Paid', 'Cancelled'].map((tab) => (
        <Link key={tab} href={`/dashboard/invoices/?status=${tab.toLowerCase()}`}>
          <span className={clsx('cursor-pointer  hover:text-gray-800', {
            'border-b-2 border-cyan-500 text-cyan-500': activeTab === tab.toLowerCase(),
            'text-gray-600': activeTab !== tab.toLowerCase(),
          })}>
            {tab}
          </span>
       </Link>
      ))}
    </div>
  )
};

export default Tabs;