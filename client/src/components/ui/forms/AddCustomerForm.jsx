import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';
import { StateSelect } from '../selects/StateSelect';

import { useForm } from '../../../utils/hook';
import { useMutation } from '@apollo/react-hooks';

import { ADD_CUSTOMER } from '../../../utils/mutations';

export default function AddCustomerForm() {
  let navigate = useNavigate();

  const [errors, setErrors] = useState();
  console.log('Errors', errors);

  function registerUserCallback() {
    console.log('addCustomerCallback');
    addCustomer();
  }
  const { onChange, onSubmit, values } = useForm(
    registerUserCallback,
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    }
  );

  // eslint-disable-next-line
  const [addCustomer, { loading }] = useMutation(ADD_CUSTOMER, {
    update(proxy, { data: { addCustomer: customerData } }) {
      navigate('/admin/customers');
    },
    onError(graphQLErrors) {
      setErrors(graphQLErrors);
    },
    variables: { addInput: values },
  });

  return (
    <>
<div className="w-3/4 md:w-1/2 lg:w-1/2 m-auto overflow-hidden">
        <form action="#" method="POST">
          <div className="bg-white px-4 py-5 sm:p-6 rounded-lg shadow">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <h1 className="text-2xl font-semibold">
                  Add New Customer
                </h1>
                {/* SUBTITLE
                <p></p> */}
              </div>
                  <div className="col-span-6 sm:col-span-3">
                    
                    <div className="mb-2 block">
                      <Label htmlFor="firstname" value="First Name" />
                    </div>
                    <TextInput
                      onChange={onChange}
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
                      onChange={onChange}
                      id="lastName"
                      type="text"
                      required={true}
                    />
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput
                      onChange={onChange}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required={true}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="phone" value="Phone" />
                    </div>
                    <TextInput
                      onChange={onChange}
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      required={true}
                    />
                  </div>

                  <div className="col-span-6">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="street"
                        value="Street Address"
                      />
                    </div>
                    <TextInput
                      onChange={onChange}
                      id="street"
                      name="street"
                      type="text"
                      required={true}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="city" value="City" />
                    </div>
                    <TextInput
                      onChange={onChange}
                      id="city"
                      name="city"
                      type="text"
                      required={true}
                    />
                  </div>

                  <div
                    id="select"
                    className="col-span-6 sm:col-span-3 lg:col-span-2"
                  >
                    <div className="mb-2 block">
                      <Label htmlFor="state" value="State" />
                    </div>
                    <StateSelect />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="zip"
                        value="Zip / Postal Code"
                      />
                    </div>
                    <TextInput
                      onChange={onChange}
                      name="zip"
                      id="zip"
                      autoComplete="zip"
                      type="text"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button type="submit" onClick={onSubmit}>
                  Add Customer
                </Button>
              </div>
        </form>
      </div>
    </>
  );
}
