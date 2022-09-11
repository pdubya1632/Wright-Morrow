import React from 'react';
import { Sidebar } from 'flowbite-react';
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag
} from 'react-icons/hi';

export default function SidebarNav() {
  return (
    <>
      <div className="w-fit bg-gray-50">
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo
            href="#"
            img="favicon.png"
            imgAlt="Wright &amp; Morrow"
          >
            Wright &amp; Morrow
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Jobs
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Items
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Customers
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Employees
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}
