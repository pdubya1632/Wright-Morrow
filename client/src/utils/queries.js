import { gql } from '@apollo/client';

//Get all customers
export const GET_CUSTOMERS = gql`
  query GET_CUSTOMERS {
    customers {
      firstName
      lastName
      phone
      email
      billingAddress {
        street
        city
        state
        zip
      }
      jobIDs {
        _id
        status
      }
    }
  }
`;

//Get 1 customer
export const GET_CUSTOMER = gql`
  query GET_CUSTOMER($customerId: ID!) {
    customer(customerId: $customerId) {
      firstName
      lastName
      phone
      email
      billingAddress {
        street
        city
        state
        zip
      }
      jobIDs {
        _id
        status
      }
    }
  }
`;

//Get all employees
export const GET_EMPLOYEES = gql`
  query GET_EMPLOYEES {
    employees {
      firstName
      lastName
      phone
      email
      isAdmin
      jobIDs {
        _id
      }
      isActive
    }
  }
`;

//Get 1 employee
export const GET_EMPLOYEE = gql`
  query GET_EMPLOYEE($employeeId: ID!) {
    employee(employeeId: $employeeId) {
      firstName
      lastName
      phone
      email
      isAdmin
      isActive
      jobIDs {
        _id
      }
    }
  }
`;

//Get all jobs
export const GET_JOBS = gql`
  query GET_JOBS {
    jobs {
      customerId
      employeeId
      status
      pickupDate
      pickupAddress {
        street
        city
        state
        zip
      }
      dropOffAddress {
        street
        city
        state
        zip
      }
      industry
      category
      description
      cost
      invoice
      ItemIds {
        _id
        qty
      }
    }
  }
`;

// GET 1 JOB
export const GET_JOB = gql`
  query GET_JOB($jobId: ID!) {
    job(jobId: $jobId) {
      customerId
      employeeId
      status
      pickupDate
      pickupAddress {
        street
        city
        state
        zip
      }
      dropOffAddress {
        street
        city
        state
        zip
      }
      industry
      category
      description
      cost
      invoice
      ItemIds {
        _id
      }
    }
  }
`;

//Get all items
export const GET_ITEMS = gql`
  query GET_ITEMS {
    items {
      name
      value
      length
      width
      height
      weight
      qty
      packType
    }
  }
`;

//Get 1 item
export const GET_ITEM = gql`
  query GET_ITEM($itemId: ID!) {
    item(itemId: $itemId) {
      name
      value
      length
      width
      height
      weight
      qty
      packType
    }
  }
`;


// Get all requests

export const GET_REQUESTS = gql`
  query GET_REQUESTS {
  requests {
    phone
    email
    shipFrom
    shipTo
    industry
    category
    description
    lastName
    firstName
    _id
 } }
`;

// Get 1 request

export const GET_REQUEST = gql`
  query getSingleRequest($requestId: ID!) {
  request(requestId: $requestId) {
    _id
    phone
    email
    shipFrom
    shipTo
    industry
    category
    description
    lastName
    firstName
    _id
  }}
`;