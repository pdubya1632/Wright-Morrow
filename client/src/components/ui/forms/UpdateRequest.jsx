// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Label, TextInput, Button, Textarea } from 'flowbite-react';
// import { IndustrySelectDropdown } from './IndustrySelectDropdown';
// import { CategorySelectDropdown } from './CategorySelectDropdown';
// import { useStoreContext } from '../../utils/GlobalState';
// import { useForm } from '../../utils/hook';
// import { useMutation } from '@apollo/react-hooks';


// import { gql } from 'graphql-tag';

// const UPDATE_REQUEST = gql`
// mutation updateRequest($id: ID!, $email: String, $phone: String, $industry: String, $shipFrom: String, $shipTo: String, $category: String, $description: String, $lastName: String, $firstName: String) {
//   updateRequest(_id: $id, email: $email, phone: $phone, industry: $industry, shipFrom: $shipFrom, shipTo: $shipTo, category: $category, description: $description, lastName: $lastName, firstName: $firstName) {
//     email
//     phone
//     shipFrom
//     firstName
//     lastName
//     industry
//     shipTo
//     category
//     description
//   }
// }
// `;



// const GET_REQUEST = gql`
//   query getSingleRequest($requestId: ID!) {
//   request(requestId: $requestId) {
//     _id
//     phone
//     email
//     shipFrom
//     shipTo
//     industry
//     category
//     description
//     lastName
//     firstName
//     _id
//   }}
// `;

// export function UpdateRequestForm() {
//   const [state, dispatch] = useStoreContext();
//   let navigate = useNavigate();
//   const { currentRequest } = state;
//   const requestId = "6323d968613bcad1d503c1f5"
//   const { loading, data } = useQuery(GET_REQUEST, {
//     // Pass the `requestId` URL parameter into query to retrieve this thought's data
//     variables: { requestId: requestId },
//   });


//   const handleClick = (id) => {
//     dispatch({
//       type: UPDATE_REQUEST,
//       currentRequest: id,
//     });
//   };

//   function filterProducts() {

//     return state.products.filter(
//       (product) => product.category._id === currentRequest
//     );
//   }
//   const [updateRequest, { error }] = useMutation(UPDATE_REQUEST, {_id: "6323d9a1613bcad1d503c1f7"});



   
// //   };
// //     let navigate = useNavigate();


// //   function updateRequestCallback() {

// //   console.log('updateRequestCallback');
// //   updateRequest();
// // }
// // const [errors, setErrors] = useState();
// // console.log('Errors', errors);
// // const { onChange, onSubmit, values } = useForm(
// //   updateRequestCallback,
// //   {
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     shipFrom: "",
// //     shipTo: "",
// //     description: ""

// //   }
// // );

// // const [updateRequest, { loading }] = useMutation(UPDATE_REQUEST, {
// //   update(proxy, { data: { updateRequest: requestData } }) {
// //     console.log('requestData', requestData);
// //     navigate('/admin/requests');
// //   },
// //   onError(graphQLErrors) {
// //     console.log(graphQLErrors)
// //   },

// //     variables: { jobRequestInput: values },
// //   });

//   return (
//     <>
//       <div className="mt-10 sm:mt-0 sm:w-1/2">
//         <div className="mt-5 md:col-span-2 md:mt-0">
//           <form action="#" method="POST" onSubmit={handleClick}>
//             <div className="overflow-hidden shadow sm:rounded-md">
//               <div className="bg-white px-4 py-5 sm:p-6">
//                 <div className="grid grid-cols-6 gap-6">
//                   <div className="col-span-6 sm:col-span-3">
//                     <div className="mb-2 block">
//                       <Label htmlFor="firstname" value="First Name" />
//                     </div>
//                     <TextInput
//                       onChange={handleInputChange}
//                       id="firstName"
//                       name="firstName"
//                       type="text"
//                       required={true}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <div className="mb-2 block">
//                       <Label htmlFor="lastName" value="Last Name" />
//                     </div>
//                     <TextInput
//                       onChange={handleInputChange}
//                       type="text"
//                       id='lastName'
//                       name='lastName'
//                       required={true}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <div className="mb-2 block">
//                       <Label htmlFor="email" value="Email" />
//                     </div>
//                     <TextInput
//                       onChange={handleInputChange}
//                       type="email"
//                       name="email"
//                       id="email"
//                       autoComplete="email"
//                       required={true}
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <div className="mb-2 block">
//                       <Label htmlFor="phone" value="Phone" />
//                     </div>
//                     <TextInput
//                       onChange={handleInputChange}
//                       type="phone"
//                       name="phone"
//                       id="phone"
//                       autoComplete="phone"
//                       required={true}
//                       maxLength="12"
//                     />
//                   </div>

//                   <div className="col-span-6">
//                     <div className="mb-2 block">
//                       <Label htmlFor="industry" value="Industry" />
//                     </div>
//                     <IndustrySelectDropdown />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <div className="mb-2 block">
//                       <Label htmlFor="shipFrom" value="Ship From" />
//                     </div>
//                     <TextInput
//                       onChange={handleInputChange}
//                       name="shipFrom"
//                       id="shipFrom"
//                       type="text"
//                       placeholder="Zip Code"
//                       required={true}
//                       maxLength="5"
//                     />
//                   </div>

//                   <div className="col-span-6 sm:col-span-3">
//                     <div className="mb-2 block">
//                       <Label htmlFor="shipTo" value="Ship To" />
//                     </div>
//                     <TextInput
//                       onChange={handleInputChange}
//                       name="shipTo"
//                       id="shipTo"
//                       type="text"
//                       placeholder="Zip Code"
//                       required={true}
//                       maxLength="5"
//                     />
//                   </div>

//                   <div className="col-span-6">
//                     <div className="mb-2 block">
//                       <Label
//                         htmlFor="category"
//                         value="Items Category"
//                       />
//                     </div>
//                     <CategorySelectDropdown />
//                   </div>

//                   <div className="col-span-6">
//                     <div className="mb-2 block">
//                       <Label
//                         htmlFor="description"
//                         value="Items Description"
//                       />
//                     </div>
//                     <Textarea
//                       id="description"
//                       name='description'
//                       placeholder="Please describe the items you wish to ship..."
//                       required={true}
//                       rows={4}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
//                 <Button type="submit" onClick={handleClick}>
//                   Submit Request
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
