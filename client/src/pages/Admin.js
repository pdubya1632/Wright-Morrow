import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SidebarNav from '../components/nav/SidebarNav';
import Dashboard from '../components/admin/Dashboard';
import Jobs from '../components/admin/Jobs';
import Items from '../components/admin/Items';
import Customers from '../components/admin/Customers';
import Employees from '../components/admin/Employees';

export default function Admin() {
  return (
    <div className="flex flex-row mt-6">
      <div className="basis-1/4">
        <SidebarNav />
      </div>
      <div className="basis-3/4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/items" element={<Items />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          {/* <Redirect from="*" to="/admin" /> */}
        </Routes>
      </div>
    </div>
  );
}
