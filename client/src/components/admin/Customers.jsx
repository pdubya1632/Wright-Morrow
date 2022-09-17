import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Pagination, Button } from 'flowbite-react';
import { useQuery } from '@apollo/client';

import { GET_CUSTOMERS } from '../../utils/queries';

function DisplayItems() {
    const { loading, data, error } = useQuery(GET_CUSTOMERS);

  if (loading) return <Table.Row><Table.Cell>Loading...</Table.Cell></Table.Row>;
  if (error) return <Table.Row><Table.Cell>Error :(</Table.Cell></Table.Row>;

  return data.customers.map(({ _id, firstName, lastName, email, phone }) => (
    <Table.Row
      key={_id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell>{firstName} {lastName}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{phone}</Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
  ));
}

export default function Items() {
  return (
    <>
        <header className="bg-white shadow flex-row flex justify-between py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Customers</h1>
        <Button>
          <Link to="/admin/customers/add">Add Customer</Link>
        </Button>
        </header>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <DisplayItems />
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
</div>
</div>
</main>
    </>
  );
}
