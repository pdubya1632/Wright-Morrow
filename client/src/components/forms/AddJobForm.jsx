import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label, TextInput, Button, Textarea } from 'flowbite-react';

import { useForm } from '../../utils/hook';
import { useMutation } from '@apollo/react-hooks';
// import {ADD_JOB} from '../../utils/mutations'
import { gql } from 'graphql-tag';


const ADD_JOB = gql`
mutation addJobNew($addJobInput: AddJobInput!) {
  addJobNew(addJobInput: $addJobInput) {
    description
    status
    }
  }
`;
export default function AddJobForm() {
  let navigate = useNavigate();


  function addJobCallback() {

  console.log('addJobCallback');
  addJob();
}
const [errors, setErrors] = useState();
console.log('Errors', errors);
const { onChange, onSubmit, values } = useForm(
  addJobCallback,
  {
    status: "",
    pickupDate: "",
    shipFrom: "",
    shipTo: "",
    industry: "",
    category: "",
    description: "",
    cost: "",

  }
);

const [addJob, { loading }] = useMutation(ADD_JOB, {
  update(proxy, { data: { addJob: jobData } }) {
    console.log('jobData', jobData);
    navigate('/admin/jobs');
  },
  onError(graphQLErrors) {
    console.log(graphQLErrors)
  },

    variables: { addJobInput: values },
  });

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form >
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/*INPUTS  */}
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="status" value="status " />
                    </div>
                    <TextInput
                      id="status"
                      type="text"
                      name='status'
                      onChange={onChange}
                      required={true}
                    />
                  </div>
                  {/*INPUTS  */}
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="pickupDate" value="pickupDate" />
                    </div>
                    <TextInput
                      id="pickupDate"
                      type="text"
                      name='pickupDate'
                      onChange={onChange}
                      required={true}
                    />
                  </div>
                  {/*INPUTS  */}
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="shipFrom" value="shipFrom" />
                    </div>
                    <TextInput
                      id="shipFrom"
                      type="text"
                      name='shipFrom'
                      onChange={onChange}
                      required={true}
                    />
                  </div>
                  {/*INPUTS  */}
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="shipTo" value="shipTo" />
                    </div>
                    <TextInput
                      id="shipTo"
                      type="text"
                      name='shipTo'
                      onChange={onChange}
                      required={true}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="industry" value="industry" />
                    </div>
                    <TextInput
                      id="industry"
                      type="text"
                      name='industry'
                      required={true}
                      onChange={onChange}

                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="category" value="category" />
                    </div>
                    <TextInput
                      id="category"
                      type="text"
                      name='category'
                      required={true}
                      onChange={onChange}

                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="description" value="description" />
                    </div>
                    <TextInput
                      id="description"
                      type="text"
                      name='description'
                      required={true}
                      onChange={onChange}

                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="mb-2 block">
                      <Label htmlFor="cost" value="Cost $" />
                    </div>
                    <TextInput
                      id="cost"
                      type="text"
                      name='cost'
                      required={true}
                      onChange={onChange}

                    />
                  </div>


                 
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Button type="submit" onClick={onSubmit}>Add Job</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
