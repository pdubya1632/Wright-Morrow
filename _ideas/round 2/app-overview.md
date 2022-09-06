## Project Criteria

- React
- GraphQL with Node.js & Express.js
- MongoDB & Mongoose ODM for database
- Queries & Mutations for add, get, update, delete data
- JWT Auth
- Heroku deploy

## Project Libraries

- [Material UI](https://mui.com/material-ui/getting-started/overview/)

## Resources

- [MERN App Tutorial w/ Mongo](https://www.mongodb.com/languages/mern-stack-tutorial)
- [MUI Templates](https://mui.com/material-ui/getting-started/templates/)
- [Generate schema](https://scaffoldhub.io/scaffolds/react-material-ui)
- [Generate dummy data](https://www.mockaroo.com/)

## Schema

    Job = {
        "\_id": "string",
        "customerId": "string",
        "employeeId": "string",
        "status": "string",
        "pickupDate": "string",
        "addresses": {
    	    "pickup": {
    		    "street: "string",
    		    "city: "string",
    		    "state: "string",
    		    "zip: "string",
    	    },
    	    "shipping": {
    		    "street: "string",
    		    "city: "string",
    		    "state: "string",
    		    "zip: "string",
    	    },
        },
        "industry": "string",
        "category": "string",
        "cost": "number",
        "invoice": "number",
        "ItemIds": "[ItemIds]",
        }

    Item = {
        "\_id": "string",
        "jobId: "string",
        "name: "string",
        "value: "string",
        "dims: {
    	    "length: "string",
    	    "width: "string",
    	    "height: "string",
    	    "weight: "string",
        },
        "qty: "number",
        "packType: "string",
        "value: "string"
    }

    Customer = {
        "\_id":"String",
        "name": "String",
        "phone":"String",
        "email":"String",
        "password":"String",
        "addresses":{
    	    "pickup": {
    		    "street": "string",
    		    "city":"string",
    		    "state": "string",
    		    "zip": "string",
    	    },
    	    "billing": {
    		    "street": "string",
    		    "city":"string",
    		    "state": "string",
    		    "zipCode": "string",
    	    },
        },
        "jobIds": "[JobIds]",
    }

    Employee = {
        "\_id":"String",
        "name": "String",
        "email":"String",
        "phone":"String",
        "password":"String",
        "jobIds": "[JobIds]",
        "isAdmin": "Boolean"
        "active": "Boolean"
    }

## ⚒️ v1 Functionality

**PUBLIC**<br />

- Landing Page w/ company info and request form

**CUSTOMER**<br />

- Create request on website

**EMPLOYEE & ADMIN**<br />
(All admin pages include view/edit functionality)

- Login Page

- Admin: Jobs<br />
  -- Customer<br />
  -- Shipping Info<br />
  -- Industry<br />
  -- Category<br />
  -- Status<br />
  -- Notes

- Admin: Customers

**ADMIN ONLY**<br />
(All admin pages include view/edit functionality)

- Admin: Employees<br />
  -- create/edit Employee<br />
  -- add Employee to Job

## 🎁 Future Functionality

- Customer: receives email w/ unique link to Job Status Page
- Customer: real-time Chat w/ Employee on Job Status Page
- Customer: uploads Storage options for Photos
- Customer: receive Email notifications re: job status
- Employee/Admin: set pricing and send invoice (Stripe)
- Employee/Admin: download admin as PWA
- Admin: schedule jobs
