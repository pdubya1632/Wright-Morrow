import React from 'react';
import { Table, Pagination, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_JOBS } from '../../utils/queries';

function DisplayJobs() {
  const { loading, data, error } = useQuery(GET_JOBS);

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

  return data.jobs.map(
    ({
      _id,
      jobId,
      customerId,
      status,
      pickupDate,
      cost,
      tracking,
      category
    }) => (
      
      <Table.Row
        key={_id}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <Link to={_id}>{jobId}</Link>
        </Table.Cell>
        <Table.Cell>{customerId}</Table.Cell>
        <Table.Cell>{status}</Table.Cell>
        <Table.Cell>
                {pickupDate}</Table.Cell>
        <Table.Cell>{cost}</Table.Cell>
        <Table.Cell>{tracking}</Table.Cell>
        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>
          <Link to={_id}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </Link>
        </Table.Cell>
      </Table.Row>
    )
  );
}

export default function Jobs() {
  return (
    <>
      <header className="bg-white shadow flex-row flex justify-between py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Jobs
        </h1>
        <Button>
          <Link to="/admin/jobs/add">Add Job</Link>
        </Button>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Table hoverable={true}>
              <Table.Head>
                <Table.HeadCell>Job ID</Table.HeadCell>
                <Table.HeadCell>Customer ID</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>Pickup Date</Table.HeadCell>
                <Table.HeadCell>Invoice</Table.HeadCell>
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
          </div>
        </div>
      </main>
    </>
  );
}
