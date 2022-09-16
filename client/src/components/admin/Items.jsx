import React from 'react';
import { Table, Pagination, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_ITEMS } from '../../utils/queries';

function DisplayItems() {
  const { loading, data, error } = useQuery(GET_ITEMS);
  if (loading)
    return (
      <Table.Row>
        <Table.Cell>Loading...</Table.Cell>
      </Table.Row>
    );
  if (error)
    return (
      <Table.Row>
        <Table.Cell>Error :(</Table.Cell>
      </Table.Row>
    );

  return data.items.map(({ id, name }) => (
    <Table.Row
      key={id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        #{id}
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
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
      <div className="flex-row flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Items
        </h1>
        <Button>
          <Link to="/admin/jobs/add">Add Item</Link>
        </Button>
      </div>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Customer</Table.HeadCell>
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
