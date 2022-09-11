import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_JOBS } from '../utils/queries';

import SidebarNav from '../components/nav/SidebarNav';

function DisplayJobs() {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.jobs.map(({ id, status, description }) => (
    <div key={id}>
      <h3>Status: {status}</h3>
      <p>Description: {description}</p>
      <br />
    </div>
  ));
}

export default function Admin() {
  return (
    <div class="flex flex-row mt-6">
      <div class="basis-1/4">
        <SidebarNav />
      </div>
      <div class="basis-3/4">
        <DisplayJobs />
      </div>
    </div>
  );
}
