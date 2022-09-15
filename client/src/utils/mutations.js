import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($customer: addJobInput!) {
    addJob(input: [$job]) {
      Job {
        firstName
        lastName
        email
        phone
        industry
        pickupAddress {
          zip
        }
        dropOffAddress {
          zip
        }
        category
        description
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation addCustomer($customer: addCustomerInput!) {
    addCustomer(input: [$customer]) {
      Customer {
        firstName
        lastName
        email
        phone
        billingAddress {
          street
          city
          state
          zip
        }
      }
    }
  }
`;

// ADD ITEM
