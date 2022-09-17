import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SidebarNav from '../components/nav/SidebarNav';
import Dashboard from '../components/admin/Dashboard';
import Jobs from '../components/admin/Jobs';
import AddJob from '../components/admin/AddJob';
import Items from '../components/admin/Items';
import Customers from '../components/admin/Customers';
import AddCustomer from '../components/admin/AddCustomer';
import Employees from '../components/admin/Employees';
import Requests from '../components/admin/Requests';
import Request from '../components/admin/Request';
import { UpdateRequestForm } from '../components/forms/UpdateRequest';

export default function Admin() {
  return (
    <div className="flex flex-row mt-6">
      <div className="basis-1/4 pl-5 pt-5">
        <SidebarNav />
      </div>
      <div className="basis-3/4 p-7">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/add" element={<AddJob />} />
          <Route path="/items" element={<Items />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/updateRequest" element={<UpdateRequestForm />} />
          <Route path="requests" element={<Requests />}></Route>
          <Route
            path="/request/:requestId"
            element={<Request />}
          />
          {/* <Redirect from="*" to="/admin" /> */}
        </Routes>
      </div>
    </div>
  );
}
