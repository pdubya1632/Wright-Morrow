import { Select } from 'flowbite-react';

export function IndustrySelectDropdown() {
  return (
                    <Select id="industry" required={true}>
                        <option>Select...</option>
                        <option>Personal</option>
                        <option>Auction</option>
                        <option>Retail Business</option>
                        <option>Manufacturer</option>
                        <option>Other</option>
                    </Select>
    )
}