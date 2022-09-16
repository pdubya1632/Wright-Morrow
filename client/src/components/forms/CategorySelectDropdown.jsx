import { Select } from 'flowbite-react';

export function CategorySelectDropdown() {
  return (
                    <Select id="category" required={true}>
                        <option>Select...</option>
                                                    <option>Industrial</option>
                            <option>Medical</option>
                            <option>Technology</option>
                            <option>Automotive</option>
                            <option>Retail</option>
                            <option>Art</option>
                            <option>Antiques</option>
                            <option>Furniture</option>
                            <option>Residential Move</option>
                            <option>Office Move</option>
                            <option>Other</option>

                    </Select>
    )
}