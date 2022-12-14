import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SidebarNav from '../../components/nav/SidebarNav';
import Dashboard from '../../components/admin/Dashboard';
import Jobs from '../../components/admin/Jobs';
import AddJob from '../../components/admin/AddJob';
import Items from '../../components/admin/Items';
import Customers from '../../components/admin/Customers';
import AddCustomer from '../../components/admin/AddCustomer';
import Employees from '../../components/admin/Employees';

export default function Admin() {
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <SidebarNav />
      </div>

      <div className="basis-5/6 p-7">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/add" element={<AddJob />} />
          <Route path="/items" element={<Items />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/employees" element={<Employees />} />
          {/* <Redirect from="*" to="/admin" /> */}
        </Routes>
      </div>
    </div>
  );
}
