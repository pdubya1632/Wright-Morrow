import React from 'react';
import { Table, Pagination } from 'flowbite-react';
import { useQuery } from '@apollo/client';

import { GET_JOBS } from '../../utils/queries';

function DisplayJobs() {
    const { loading, data, error } = useQuery(GET_JOBS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return data.jobs.map(({ id, status, category, industry }) => (
    <Table.Row
      key={id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        #{id}
      </Table.Cell>
      <Table.Cell>*customer</Table.Cell>
      <Table.Cell>{status}</Table.Cell>
      <Table.Cell>*tracking</Table.Cell>
      <Table.Cell>{category}</Table.Cell>
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

export default function JobsTable() {
  return (
    <>
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
          <DisplayJobs />
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
