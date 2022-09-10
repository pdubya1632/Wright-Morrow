import React, { useState } from 'react';
import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';


export default function LoginForm() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { 
            email: formState.email,
            password: formState.password 
        },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    return (
        <>
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
}};