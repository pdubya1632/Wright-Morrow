import React, {useContext, useState } from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../../utils/hook";
import { gql } from 'graphql-tag';
import { AuthContext } from "../../context/authContext.js";
import { useNavigate } from "react-router-dom";

const LOGIN_USER = gql`

  mutation loginUser(
    $loginInput: LoginInput!
  )
  {
    loginUser(loginInput: $loginInput)
      {
        email
        firstName
        token
      }
  }
`

export default function LoginForm() {
    const context = useContext(AuthContext);

    let navigate = useNavigate();

    const [errors, setErrors] = useState();
    console.log("Errors", errors);
    
    function loginUserCallback() {
      console.log("loginUserCallback");
      loginUser();
    }
    
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
      email: "",
      password: "",
    });
  
    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
      update(proxy, { data: { loginUser: userData } }) {
        console.log("UserData", userData);
        context.login(userData);
        navigate('/home');
      },
      onError(graphQLErrors) {
        setErrors(graphQLErrors)
      },
      variables: { loginInput: values }
    })
  
    return (
        <>
            <form className="flex flex-col gap-4">
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
              htmlFor="password1"
              value="Your password"
            />
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
};