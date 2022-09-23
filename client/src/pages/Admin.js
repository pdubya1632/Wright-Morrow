import { Route, Routes } from 'react-router-dom';

import AdminNav from '../components/nav/AdminNav';

import Dashboard from '../components/admin/Dashboard';
import Jobs from '../components/admin/Jobs';
import AddJob from '../components/admin/AddJob';
import Items from '../components/admin/Items';
import AddItem from '../components/admin/AddItem';
import Customers from '../components/admin/Customers';
import AddCustomer from '../components/admin/AddCustomer';
import Employees from '../components/admin/Employees';
import Requests from '../components/admin/Requests';
import Request from '../components/admin/Request';

export default function Admin() {
  return (
    <>
      <AdminNav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/add" element={<AddJob />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/add" element={<AddItem />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/request/:requestId" element={<Request />} />
      </Routes>
    </>
  );
}
