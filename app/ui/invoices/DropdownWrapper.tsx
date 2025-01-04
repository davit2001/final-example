'use client';

import InvoiceStatus from '@/app/ui/invoices/status';
import Dropdown from '@/app/ui/invoices/Dropdown';
import { FC } from 'react';
import { STATUS } from '@/app/_constants/invoices';
import { editInvoiceStatus } from '@/app/lib/actions';

interface DropdownWrapperProps {
  id: string;
  status: string;
  date: string;
}

const DropdownWrapper: FC<DropdownWrapperProps> = ({ id, status, date }) => (
  <Dropdown
    Button={({ onClick, className }) => (
      <InvoiceStatus className={className} onClick={onClick} status={status} date={date} />
    )}
    options={Object.values(STATUS).filter((option: string) => option !== status)}
    DropDownItem={({ onClick, status }) => (
      <InvoiceStatus onClick={async () => {
        await editInvoiceStatus(id, status);
        onClick();
      }} status={status} date={date} />
    )}
  />
);

export default DropdownWrapper;