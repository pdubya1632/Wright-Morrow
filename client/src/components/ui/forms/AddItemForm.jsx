import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
// import { StateSelectDropdown } from './StateSelectDropdown';

export default function AddItemForm() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  
                  <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="item name"
                        required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="value"
                            value="number"
                        />
                    </div>
                    <TextInput
                    id="value"
                    type="text"
                    placeholder="value"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-4">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="length"
                            value="length"
                        />
                    </div>
                    <TextInput
                    id="length"
                    type="text"
                    placeholder="length"
                    required={true}
                    />
                </div>

                  <div className="col-span-6">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="width"
                            value="width"
                        />
                    </div>
                    <TextInput
                    id="width"
                    type="text"
                    placeholder="width"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="height"
                            value="height"
                        />
                    </div>
                    <TextInput
                    id="height"
                    type="text"
                    placeholder="height"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                    <Label
                        htmlFor="weight"
                        value="weight"
                    />
                </div>
                    <TextInput
                    id="weight"
                    type="text"
                    placeholder="weight"
                    required={true}
                    />
                </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                        <Label
                            htmlFor="quantity"
                            value="quantity"
                        />
                    </div>
                    <TextInput
                    id="quantity"
                    type="text"
                    required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <div className="mb-2 block">
                  <Label
                            htmlFor="packType"
                            value="packType"
                        />
                    </div>
                    <TextInput
                    id="packType"
                    type="text"
                    required={true}
                    />
                </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <Button type="submit">Add Item</Button>
            </div>
        </div>
        </form>
    </div>
    </div>
</>
);
}
