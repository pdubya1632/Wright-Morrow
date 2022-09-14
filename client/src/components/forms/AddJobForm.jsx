import React from 'react';
import { Label, TextInput, Button  } from 'flowbite-react';
import { StateSelectDropdown } from './StateSelectDropdown'

export default function AddJobForm() {
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
            <Label htmlFor="firstname" value="First Name" />
          </div>
          <TextInput
            id="firstName"
            type="text"
            required={true}
          />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                              <div className="mb-2 block">
            <Label htmlFor="lastName" value="Last Name" />
          </div>
          <TextInput
            id="lastName"
            type="text"
            required={true}
          />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                                                  <div className="mb-2 block">
            <Label htmlFor="email-address" value="Email" />
          </div>
          <TextInput
            type="email"
            name="email-address"
                      id="email-address"
                      autoComplete="email"
            required={true}
          />

                  </div>

                  <div className="col-span-6">
                              <div className="mb-2 block">
            <Label htmlFor="street-address" value="Street Address" />
          </div>
          <TextInput
            id="street-address"
            type="text"
            required={true}
          />
                  </div>




                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <div className="mb-2 block">
            <Label htmlFor="city" value="City" />
          </div>
          <TextInput
            id="city"
            type="text"
            required={true}
          />
                  </div>

                  <div id="select" className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <div className="mb-2 block">
            <Label htmlFor="state" value="State" />
          </div>
                    <StateSelectDropdown />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <div className="mb-2 block">
            <Label htmlFor="postal-code" value="Zip / Postal Code" />
          </div>
                    <TextInput
            name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
            type="text"
            required={true}
          />

                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <Button type="submit">Add Customer</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
