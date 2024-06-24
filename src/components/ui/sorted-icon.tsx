import { SortDirection } from '@tanstack/react-table';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

export default function SortedIcon({
  isSorted,
}: {
  isSorted: false | SortDirection;
}) {
  return isSorted === 'asc' ? (
    <ChevronUpIcon className='size-4' />
  ) : isSorted === 'desc' ? (
    <ChevronDownIcon className='size-4' />
  ) : null;
}
