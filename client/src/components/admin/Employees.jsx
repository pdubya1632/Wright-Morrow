import React from 'react';
import { Table, Pagination } from 'flowbite-react';
import { useQuery } from '@apollo/client';

import { GET_EMPLOYEES } from '../../utils/queries';

function DisplayItems() {
    const { loading, data, error } = useQuery(GET_EMPLOYEES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return data.employees.map(({ id, firstName }) => (
    <Table.Row
      key={id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        #{id}
      </Table.Cell>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>test</Table.Cell>
      <Table.Cell>test</Table.Cell>
      <Table.Cell>test</Table.Cell>
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
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Tracking</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
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

    </>
  );
}
