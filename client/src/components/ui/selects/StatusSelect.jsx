import { Select } from 'flowbite-react';

export function StatusSelect() {
  return (
    <Select id="category" required={true}>
      <option>Select...</option>
      <option>Requested</option>
      <option>Confirmed</option>
      <option>Packing</option>
      <option>Ready for Ship</option>
      <option>Shipped</option>
      <option>Delivered</option>
      <option>Completed</option>
      <option>Issue</option>
      <option>Lost</option>
    </Select>
  );
}
