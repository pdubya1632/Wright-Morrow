import React from 'react';
import { Table, Checkbox } from 'flowbite-react';
import { useQuery } from '@apollo/client';

import { GET_JOBS } from '../../utils/queries';

const Jobs = () => {
  const { loading, data } = useQuery(GET_JOBS);
  const jobData = data?.jobs || [];

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Job ID</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Industry</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {jobData.map((job) => {
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="!p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Job #{job.id}
                </Table.Cell>
                <Table.Cell>{job.status}</Table.Cell>
                <Table.Cell>{job.category}</Table.Cell>
                <Table.Cell>{job.industry}</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default Jobs;
