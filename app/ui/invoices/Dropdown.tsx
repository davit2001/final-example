'use client';

import { FC, PropsWithChildren, useState , useRef} from 'react';
import useOutsideClick from '@/app/_hooks/useOutsideClick';

interface DropdownProps {
  Button: FC<{ onClick: () => void, className?: string }>,
  DropDownItem: FC<{ onClick: () => void, status: string }>,
  options: string[]
}

const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({ Button, children, options, DropDownItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div className="relative cursor-pointer">
      <Button onClick={() => setIsOpen((prevState) => !prevState)} />
      {isOpen && (
        <div ref={ref} className="mt-8 bg-white z-10 p-2 border-2 border-gray-400 rounded-2xl absolute top-0 left-0 flex flex-col gap-2">
          {children}
          {options.map((option) => (
            <DropDownItem key={option} status={option} onClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </div>
  )
};

export default Dropdown;