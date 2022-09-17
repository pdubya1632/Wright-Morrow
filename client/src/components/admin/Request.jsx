import React from 'react';
import { Table,  Button, Pagination } from 'flowbite-react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { JobRequestForm } from '../forms/JobRequestForm';
import { gql } from 'graphql-tag';
import DisplayRequest from './DisplayRequest';



const Request = () => {

  return (
    <>
    <div className="flex-row flex justify-between">
<h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Requests</h1>
<Button>

</Button>
</div>
<Table hoverable={true}>
<Table.Head>
  <Table.HeadCell>ID</Table.HeadCell>
  <Table.HeadCell>Email📧</Table.HeadCell>
  <Table.HeadCell>Phone📞</Table.HeadCell>
  <Table.HeadCell>Ship From⬅️</Table.HeadCell>
  <Table.HeadCell>Ship To➡️</Table.HeadCell>
  <Table.HeadCell>Category</Table.HeadCell>
  <Table.HeadCell>Industry</Table.HeadCell>
  <Table.HeadCell>Description</Table.HeadCell>
  <Table.HeadCell>
    <span className="sr-only">Edit</span>
  </Table.HeadCell>
</Table.Head>
<Table.Body className="divide-y">
  <DisplayRequest />
</Table.Body>
</Table>

<div className="mt-6 flex items-center justify-center text-center">
<Pagination
  currentPage={1}
  layout="table"
  showIcons={true}
  totalPages={1000}
/>
{/* todo: add onPageChange to Pagination */}
{/* onPageChange={onPageChange} */}
</div>
<Outlet />
</>
  ); 
}

export default Request;



