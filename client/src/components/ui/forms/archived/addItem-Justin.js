import React from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';

export default function AddItem() {
  return (
    <>
        <div className="col-span-6 sm:col-span-3">
          <div className="mb-2 block">
            <Label htmlFor="name" value="name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="item name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="value" value="number" />
          </div>
          <TextInput
            id="value"
            type="text"
            placeholder="value"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="length" value="length" />
          </div>
          <TextInput
            id="length"
            type="text"
            placeholder="length"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="width" value="width" />
          </div>
          <TextInput id="width" type="width" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="height" value="height" />
          </div>
          <TextInput
            id="height"
            type="text"
            placeholder="height"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="weight" value="weight" />
          </div>
          <TextInput
            id="weight"
            type="text"
            placeholder="weight"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="qty" value="qty" />
          </div>
          <TextInput id="qty" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="packType" value="packType" />
          </div>
          <TextInput id="packType" type="text" required={true} />
        </div>
      </form>
    </>
  );
}
