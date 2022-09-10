import { useContext, useState } from "react";
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { AuthContext } from "../context/authContext.js";

import { useForm } from "../utils/hooks";
import { useMutation } from "@apollo/react-hooks";

import { gql } from 'graphql-tag';
import { useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
  mutation register(
    $registerInput: RegisterInput!
  ){44
    registerUser(
      registerInput: $registerInput){
        email
        firstName
        token
      }
  }
`

function Register(props) {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate('/home');
    },
    onError(graphQLErrors) {
      setErrors(graphQLErrors)
    },
    variables: { registerUser: values }
  })

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="name@wrightandmorrow.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}

export default Register;