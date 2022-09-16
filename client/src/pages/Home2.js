import React from 'react';

import { TopNav } from '../components/nav/TopNav';
import { RequestForm } from '../components/forms/RequestForm';
import { FooterNav } from '../components/nav/FooterNav';

import { useContext, useState } from 'react';
import { Card, Label, TextInput, Select, Textarea, Button } from 'flowbite-react';
import { useForm } from '../utils/hook';
import { useMutation } from '@apollo/react-hooks';


import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';

const REQUEST_JOB = gql`
mutation requestJob($jobRequestInput: JobRequestInput!) {
    requestJob(jobRequestInput: $jobRequestInput) {
      email
      phone
    }
  }
`;


export default function Home() {
  let navigate = useNavigate();


  function submitRequestCallback() {
    console.log('submitRequestCallback');
    submitRequest();
  }
  const [errors, setErrors] = useState();
  console.log('Errors', errors);
  const { onChange, onSubmit, values } = useForm(
    submitRequestCallback,
    {
      email: '',
      phone: '',
      shipFrom: '',
      shipTo: '',
      description: '',
    }
  );

  const [submitRequest, { loading }] = useMutation(REQUEST_JOB, {
    update(proxy, { data: { submitRequest: requestData } }) {
      console.log('requestData', requestData);
      navigate('/admin/jobs');
    },
    onError(graphQLErrors) {
      console.log(graphQLErrors)
    },
    variables: { jobRequestInput: values },
  });
  return (
    <>
      <TopNav />
      <div className="max-w-sm">
        <Card>
          <form className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email"
                type="email"
                name='email'
                placeholder="name@email.com"
                required={true}
                onChange={onChange}
              />
            </div>
            {/* Phone */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="phone"
                  value="Your phone number"
                />
              </div>
              <TextInput
                id="phone"
                type="phone"
                name='phone'
                placeholder="xxx-xxx-xxxx"
                required={true}
                onChange={onChange}
              />
            </div>
            {/* Industry */}
            <div id="select">
              <div className="mb-2 block">
                <Label
                  htmlFor="industry"
                  value="Industry"
                />
              </div>
              {/* <Select
                id="industry"
                required={true}
                name="industry"
                onChange={onChange}
                onSelect={onChange}
              >
                <option>Select...</option>
                <option>Personal</option>
                <option>Auction</option>
                <option>Retail Business</option>
                <option>Manufacturer</option>
                <option>Other</option>
              </Select> */}
            </div>
            {/* Ship From */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="ship-from"
                  value="Ship From"
                />
              </div>
              <TextInput
                onChange={onChange}
                id="ship-from"
                type="text"
                name='shipFrom'
                placeholder="Zip Code"
                required={true}
              />
            </div>
            {/* Ship To */}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="ship-to"
                  value="Ship To"
                />
              </div>
              <TextInput
                onChange={onChange}
                id="ship-to"
                type="text"
                name='shipTo'
                placeholder="Zip Code"
                required={true}
              />
            </div>
            {/* Category */}
            <div id="select">
              <div className="mb-2 block">
                <Label
                  htmlFor="category"
                  value="Category of Items"
                />
              </div>
              {/* <Select
                id="category"
                required={true}
                name='category'
                onChange={onChange}
              >
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
              </Select> */}
            </div>
            {/* Description */}
            <div id="textarea">
              <div className="mb-2 block">
                <Label
                  htmlFor="description"
                  value="Description"
                />
              </div>
              <Textarea
                id="description"
                placeholder="Describe your items..."
                required={true}
                rows={4}
                name='description'
                onChange={onChange}
              />
            </div>
            {/* Submit */}
            <Button type="submit" onClick={onSubmit}>
              Submit Request
            </Button>
          </form>
        </Card>
      </div>
      <FooterNav />
    </>

  )
}
