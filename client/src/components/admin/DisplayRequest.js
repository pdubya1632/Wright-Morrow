import React from 'react';
import { Table, } from 'flowbite-react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { gql } from 'graphql-tag';

const GET_REQUEST = gql`
  query getSingleRequest($requestId: ID!) {
  request(requestId: $requestId) {
    _id
    phone
    email
    shipFrom
    shipTo
    industry
    category
    description
    lastName
    firstName
    _id
  }}
`;

export default function DisplayRequest() {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { requestId } = useParams();

  const { loading, data } = useQuery(GET_REQUEST, {
    // Pass the `requestId` URL parameter into query to retrieve this thought's data
    variables: { requestId: requestId },
  });

  const request = data?.request || {};
  console.log(request);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Table.Row
      key={request._id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">

        <NavLink
          to={`/admin/request/${request.email}`}
          className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
        >#{request._id}</NavLink>

      </Table.Cell>
      <Table.Cell>{request.email}</Table.Cell>
      <Table.Cell>{request.phone}</Table.Cell>
      <Table.Cell>{request.shipFrom}</Table.Cell>
      <Table.Cell>{request.shipTo}</Table.Cell>
      <Table.Cell>*Category</Table.Cell>
      <Table.Cell>*Industry</Table.Cell>
      <Table.Cell>{request.description}</Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
      <Outlet />
    </Table.Row>


  );
}