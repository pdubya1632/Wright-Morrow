import React from 'react';
import AddItemForm from '../ui/forms/AddItemForm'

export default function AddItem() {
    return (
        <>
            <div className="flex-row flex justify-between">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Add Job</h1>
            </div>
            <AddItemForm />
        </>
    )
}