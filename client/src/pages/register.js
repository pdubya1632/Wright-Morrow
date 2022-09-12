import { useContext, useState } from "react";
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { AuthContext } from "../context/authContext.js";

import { useForm } from "../utils/hook";
import { useMutation } from "@apollo/react-hooks";

import { gql } from 'graphql-tag';
import { useNavigate } from "react-router-dom";

const REGISTER_USER = gql`
  mutation register(
    $registerInput: RegisterInput!
  )
  {
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
  const [errors, setErrors] = useState();
  console.log("Errors", errors);
  function registerUserCallback() {
    console.log("registerUserCallback");
    registerUser();
  }
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
      console.log(userData);
      navigate('/home');
    },
    onError(graphQLErrors) {
      setErrors(graphQLErrors)
    },
    variables: { registerInput: values }
  })

  return (
    <>
      <h1>Register</h1>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="firstName"
              value="First Name"
            />
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
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="lastName"
              value="Last Name"
            />
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
            onChange={onChange}
            placeholder="name@wrightandmorrow.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="phone"
              value="Your Phone Number"
            />
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
            onChange={onChange}
            placeholder="🤫🤫🤫"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="passwordConfirm"
              value="Confirm password"
            />
          </div>
          <TextInput
            name="passwordConfirm"
            type="password"
            id="passwordConfirm"
            onChange={onChange}
            placeholder="🤫🤫🤫"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>

        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </>
  )
}

export default Register;