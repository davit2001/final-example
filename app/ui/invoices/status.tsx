import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { isDateOverDue } from '@/app/lib/utils';
import { STATUS } from '@/app/_constants/invoices';

export default function InvoiceStatus({ className, onClick, status, date }: { className?: string, onClick?: () => void, status: string, date: string }) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
          'bg-red-600 text-white': status === 'cancelled',
        },
        className
      )}
    >
      {status === 'pending' ? (
        <>
          {isDateOverDue(date) ? 'Overdue' : 'Pending'}
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          {STATUS.PAID}
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'cancelled' ? (
        <>
          {STATUS.CANCELLED}
          <XCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
