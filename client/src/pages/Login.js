import React, { useContext, useState } from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from '../utils/hook';
import { gql } from 'graphql-tag';
import { AuthContext } from '../context/authContext.js';
import { useNavigate } from 'react-router-dom';
import { AuthFormHeader } from '../components/layout/AuthFormHeader.jsx';
import { Link } from 'react-router-dom';

const LOGIN_USER = gql`
  mutation loginUser($loginInput: LoginInput!) {
    loginUser(loginInput: $loginInput) {
      email
      firstName
      token
    }
  }
`;

export default function LoginForm() {
  const context = useContext(AuthContext);

  let navigate = useNavigate();

  const [errors, setErrors] = useState();
  console.log('Errors', errors);

  function loginUserCallback() {
    console.log('loginUserCallback');
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: '',
  });

  // eslint-disable-next-line
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { loginUser: userData } }) {
      console.log('UserData', userData);
      context.login(userData);
      navigate('/admin');
    },
    onError(graphQLErrors) {
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
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
                    Login to your account
                  </h1>
                  <p>
                    <Link
                      class="text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
                      to="/register"
                    >
                      Or create a new account
                    </Link>
                  </p>
                </div>
                <div className="col-span-6">
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
                <div className="col-span-6">
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Password" />
                  </div>
                  <TextInput
                    name="password"
                    type="password"
                    id="password"
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
