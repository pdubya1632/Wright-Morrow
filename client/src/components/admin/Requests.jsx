import { Table, Pagination, Button } from 'flowbite-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_REQUESTS } from '../../utils/queries';

function DisplayRequests() {
    const { loading, data, error } = useQuery(GET_REQUESTS);

  if (loading) return <Table.Row><Table.Cell>Loading...</Table.Cell></Table.Row>;
  if (error) return <Table.Row><Table.Cell>Error :(</Table.Cell></Table.Row>;

  return data.requests.map(({ _id, email, phone, shipFrom
  , description, shipTo }) => (
    <Table.Row
      key={_id}
      className="bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">

            <NavLink
              to={`/admin/request/${_id}`}
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            >#{_id}</NavLink>

      </Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{phone}</Table.Cell>
      <Table.Cell>{shipFrom}</Table.Cell>
      <Table.Cell>{shipTo}</Table.Cell>
      <Table.Cell>*Category</Table.Cell>
      <Table.Cell>*Industry</Table.Cell>
      <Table.Cell>{description}</Table.Cell>
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
    
  ));
}

export default function Requests() {
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
          <DisplayRequests />
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
