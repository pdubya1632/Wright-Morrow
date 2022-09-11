// import React from 'react';
import { NavLink } from 'react-router-dom';
// import * from 'heroicons-react';
// https://heroicons.com/

export default function SidebarNav() {
  return (
    <>
      <div className="w-full bg-gray-300">
        <p>Wright &amp; Morrow</p>
        <ul className="flex-col min-w-full flex list-none">
          <li className="rounded-lg mb-4">
            <NavLink
              to="/admin"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="rounded-lg mb-4">
            <NavLink
              to="/admin/jobs"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            >
              Jobs
            </NavLink>
          </li>
          <li className="rounded-lg mb-4">
            <NavLink
              to="/admin/items"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            >
              Items
            </NavLink>
          </li>
          <li className="rounded-lg mb-4">
            <NavLink
              to="/admin/customers"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            >
              Customers
            </NavLink>
          </li>
          <li className="rounded-lg mb-4">
            <NavLink
              to="/admin/employees"
              className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
            >
              Employees
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
