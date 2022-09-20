import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import { PackTypeSelect } from '../selects/PackTypeSelect';

export default function AddItemForm() {
  return (
    <>
      <div className="w-3/4 md:w-1/2 lg:w-1/2 m-auto overflow-hidden">
        <form action="#" method="POST">
          <div className="bg-white px-4 py-5 sm:p-6 rounded-lg  shadow">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <h1 className="text-2xl font-semibold">
                  Add New Item
                </h1>
                <p>
                  Add all details below for new items to be shipped that are not currently in the
                  database.
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Item Name" />
                </div>
                <TextInput id="name" type="text" required={true} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="value" value="Value" />
                </div>
                <TextInput id="value" type="text" placeholder="$"  
                  required={true} />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="width" value="width" />
                </div>
                <TextInput id="width" type="text" placeholder="in" required={true} />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="length" value="length" />
                </div>
                <TextInput id="length" type="text" placeholder="in" required={true} />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="height" value="height" />
                </div>
                <TextInput id="height" type="text" placeholder="in" required={true} />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="weight" value="weight" />
                </div>
                <TextInput
                  id="weight"
                  type="text"
                  placeholder="lbs"
                  required={true}
                />
              </div>

<div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <div className="mb-2 block">
                  <Label htmlFor="packType" value="Pack Type" />
                </div>
              <PackTypeSelect />
               </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <Button type="submit">Add Item</Button>
          </div>
        </form>
      </div>
    </>
  );
}
             