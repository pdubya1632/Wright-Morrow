import React from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

export default function AddCustomer() {
  return (
    <>
      <form className="flex flex-col gap-4">
        {/* First Name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="firstname" value="firstname" />
          </div>
          <TextInput
            id="firstName"
            type="text"
            placeholder="first name"
            required={true}
          />
        </div>
        {/* Last Name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastname" value="lastname" />
          </div>
          <TextInput
            id="lastName"
            type="text"
            placeholder="last name"
            required={true}
          />
        </div>
        {/* Email */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="email"
            required={true}
          />
        </div>
        {/* Phone */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="phone" />
          </div>
          <TextInput
            id="phone"
            type="text"
            placeholder="phone"
            required={true}
          />
        </div>
        {/* Address */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="city" value="city" />
          </div>
          <TextInput id="city" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="state" value="state" />
          </div>
          <TextInput id="state" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="address" />
          </div>
          <TextInput id="address" type="text" required={true} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="zip" value="zip" />
          </div>
          <TextInput id="zip" type="zip" required={true} />
        </div>
        {/* Submit */}
        <Button type="submit">Add Customer</Button>
      </form>
    </>
  );
}
