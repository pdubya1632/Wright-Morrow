import { useState } from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';
// add Select, back to import above
import { useForm } from '../../../utils/hook';
import { useMutation } from '@apollo/react-hooks';

import { IndustrySelect } from '../selects/IndustrySelect';
import { CategorySelect } from '../selects/CategorySelect';

import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';

const REQUEST_JOB = gql`
  mutation RequestJob($jobRequestInput: JobRequestInput!) {
    requestJob(jobRequestInput: $jobRequestInput) {
      email
      phone
    }
  }
`;

export default function AddJobForm() {
  let navigate = useNavigate();

  function submitRequestCallback() {
    console.log('submitRequestCallback');
    submitRequest();
  }
  // eslint-disable-next-line
  const [errors, setErrors] = useState();
  console.log('Errors', errors);
  const { onChange, onSubmit, values } = useForm(
    submitRequestCallback,
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      shipFrom: '',
      shipTo: '',
      description: '',
    }
  );
  // eslint-disable-next-line
  const [submitRequest, { loading }] = useMutation(REQUEST_JOB, {
    update(proxy, { data: { submitRequest: requestData } }) {
      console.log('requestData', requestData);
      navigate('/admin/jobs');
    },
    onError(graphQLErrors) {
      console.log(graphQLErrors);
    },
    variables: { jobRequestInput: values },
  });

  return (
    <>
      <div className="w-3/4 md:w-1/2 lg:w-1/2 m-auto overflow-hidden">
        <form action="#" method="POST">
          <div className="bg-white px-4 py-5 sm:p-6 rounded-lg  shadow">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <h1 className="text-2xl font-semibold">Add Job</h1>
                <p>
                  For new customers who reach out via email or phone,
                  manually enter their job info below.
                </p>
              </div>
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First Name" />
                </div>
                <TextInput
                  id="firstName"
                  type="text"
                  name="firstName"
                  required={true}
                  onChange={onChange}
                />
              </div>
              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last Name" />
                </div>
                <TextInput
                  id="lastName"
                  type="text"
                  name="lastName"
                  required={true}
                  onChange={onChange}
                />
              </div>
              {/* Email */}
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  required={true}
                  onChange={onChange}
                />
              </div>
              {/* Phone */}
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Phone" />
                </div>
                <TextInput
                  id="phone"
                  type="phone"
                  name="phone"
                  placeholder="xxx-xxx-xxxx"
                  required={true}
                  onChange={onChange}
                />
              </div>
              {/* Industry */}
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label htmlFor="industry" value="Industry" />
                </div>
                <IndustrySelect />
              </div>
              {/* Ship From */}
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="ship-from" value="Ship From" />
                </div>
                <TextInput
                  onChange={onChange}
                  id="ship-from"
                  type="text"
                  name="shipFrom"
                  placeholder="Zip Code"
                  required={true}
                />
              </div>
              {/* Ship To */}
              <div className="col-span-6 sm:col-span-3">
                <div className="mb-2 block">
                  <Label htmlFor="ship-to" value="Ship To" />
                </div>
                <TextInput
                  onChange={onChange}
                  id="ship-to"
                  type="text"
                  name="shipTo"
                  placeholder="Zip Code"
                  required={true}
                />
              </div>
              {/* Category */}
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="category"
                    value="Category of Items"
                  />
                </div>
                <CategorySelect />
              </div>
              {/* Description */}
              <div className="col-span-6">
                <div className="mb-2 block">
                  <Label
                    htmlFor="description"
                    value="Items Description"
                  />
                </div>
                <Textarea
                  id="description"
                  required={true}
                  rows={4}
                  name="description"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {/* Submit */}
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <Button onClick={onSubmit}>Add Job</Button>
          </div>
        </form>
      </div>
    </>
  );
}
