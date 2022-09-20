import { Select } from 'flowbite-react';

export function PackTypeSelect() {
  return (
    <Select id="category" required={true}>
      <option>Select...</option>
      <option>c1</option>
      <option>c2</option>
      <option>c3</option>
      <option>c4</option>
      <option>c5</option>
    </Select>
  );
}

