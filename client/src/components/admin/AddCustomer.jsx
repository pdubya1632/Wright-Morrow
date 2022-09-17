import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import AddCustomerForm from '../ui/forms/AddCustomerForm';

export default function AddCustomer() {
    return (
        <>
        <header className="bg-white shadow flex-row flex justify-between py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Customers</h1>
        <Button>
          <Link to="/admin/customers">View Customers</Link>
        </Button>
        </header>
                <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
            <AddCustomerForm />
            </div>
            </div>
            </main>
        </>
    )
}