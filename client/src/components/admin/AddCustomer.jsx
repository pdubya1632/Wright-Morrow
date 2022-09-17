import React from 'react';
import AddCustomerForm from '../ui/forms/AddCustomerForm';

export default function AddCustomer() {
    return (
        <>
            <div className="flex-row flex justify-between">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Add Customer</h1>
            </div>
            <AddCustomerForm />
        </>
    )
}