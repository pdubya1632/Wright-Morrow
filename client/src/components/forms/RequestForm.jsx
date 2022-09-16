import { useState } from 'react';
import { Card, Label, TextInput, Textarea, Button } from 'flowbite-react';
// add Select, back to import above
import { useForm } from '../../utils/hook';
import { useMutation } from '@apollo/react-hooks';


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


export function RequestForm() {
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
      console.log(graphQLErrors)
    },
    variables: { jobRequestInput: values },
  });
    return (
        <>
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
                    <Button  onClick={onSubmit}>
                        Submit Request
                    </Button>
                    </form>
                </Card>
                </div>
        </>
    )
};