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
        "shipDate": "string",
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
        "paymentStatus": "string",
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

## Enums

- Job Status: Received > Confirmed > Packing > Wait for Ship > Shipped > Delivered > Completed > Issue > Lost
- Job Industry: Personal, Auction, Retail Business, Manufacturer, Other
- Job Category: Industrial, Medical, Technology, Automotive, Retail, Art, Antiques, Furniture, Residential Move, Office Move, Other
- Item packType: c1, c2, c3, c4, c5

## ⚒️ v1 Functionality

**v1 PUBLIC**<br />

- Landing Page w/ company info and request form

**v1 CUSTOMER**<br />

- Create request on website

**v1 EMPLOYEE & ADMIN**<br />
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

**v2 ADMIN ONLY**<br />
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
