import React from 'react';

import SidebarNav from '../components/nav/SidebarNav';
import JobsTable from '../components/tables/JobsTable';

export default function Admin() {
  return (
    <div className="flex flex-row mt-6">
      <div className="basis-1/4">
        <SidebarNav />
      </div>
      <div className="basis-3/4">
        <JobsTable />
      </div>
    </div>
  );
}
