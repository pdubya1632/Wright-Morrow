import { useContext, useState } from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext.js';
import { AuthFormHeader } from '../components/layout/AuthFormHeader.jsx';

import { useForm } from '../utils/hook';
import { useMutation } from '@apollo/react-hooks';

import { gql } from 'graphql-tag';
import { useNavigate } from 'react-router-dom';

const REGISTER_USER = gql`
  mutation register($registerInput: RegisterInput!) {
    registerUser(registerInput: $registerInput) {
      email
      firstName
      token
    }
  }
`;

function Register(props) {
  const context = useContext(AuthContext);

  let navigate = useNavigate();

  const [errors, setErrors] = useState();
  console.log('Errors', errors);

  function registerUserCallback() {
    console.log('registerUserCallback');
    registerUser();
  }
  const { onChange, onSubmit, values } = useForm(
    registerUserCallback,
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    }
  );

  // eslint-disable-next-line
  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      console.log('UserData', userData);
      context.login(userData);
      navigate('/admin');
    },
    onError(graphQLErrors) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values },
  });

  return (
    <>
      <AuthFormHeader />

      <div class="p-6 md:w-1/2 m-auto bg-white rounded-lg dark:bg-gray-800">
        <form className="flex flex-col gap-4">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <h1 class="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Create a new account
                  </h1>
                  <p>
                    <Link
                      class="text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/login"
                    >
                      Or login to an existing account
                    </Link>
                  </p>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="First Name" />
                  </div>
                  <TextInput
                    name="firstName"
                    type="text"
                    id="firstName"
                    onChange={onChange}
                    placeholder="John"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Last Name" />
                  </div>
                  <TextInput
                    name="lastName"
                    type="text"
                    id="lastName"
                    onChange={onChange}
                    placeholder="Cena"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                  </div>
                  <TextInput
                    name="email"
                    type="email"
                    id="email"
                    onChange={onChange}
                    placeholder="name@wrightandmorrow.com"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone" />
                  </div>
                  <TextInput
                    name="phone"
                    type="text"
                    id="phone"
                    onChange={onChange}
                    placeholder="(555) 555-5555"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <TextInput
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={onChange}
                    placeholder="🤫🤫🤫"
                    required={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="passwordConfirm"
                      value="Confirm password"
                    />
                  </div>
                  <TextInput
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    onChange={onChange}
                    placeholder="🤫🤫🤫"
                    required={true}
                  />
                </div>
                <div className="col-span-6">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <Button type="submit" onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
