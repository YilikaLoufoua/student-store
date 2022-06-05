### Student Store

Deployed Application: [Student Store Deployed Site](https://yilika-student-store.surge.sh/)

### Application Features

#### REQUIRED FEATURES

##### FRONT END 
- [x] The frontend should include a landing page that displays the products available for purchase.
- [x] Each product should have an individual page that shows the details of the product and allows the user to add that product to their shopping cart.
- [x] A checkout form should be available that allows the user to enter their email and send their order to the API.
- [x] There should be a `Sidebar` component that appears on every page and has two states - `open` and `closed`. When the Sidebar is opened, it should display a shopping cart of all the products the user currently has in their cart. It should also calculate and display the total amount in dollars for the checked-out items. When it's closed, the Sidebar should be much thinner and not display its internal content.

##### BACK END
- [x] The API should contain an endpoint that serves an array of all products in the store
- [x] An endpoint should exist for creating orders and saving them to a JSON file. Each order should contain the email of the person placing the order, the items associated with the order, and the quantity of each item purchased.
- [x] A Store model should handle all data management logic for the API and be the interface for read/write operations to the JSON file.

#### STRETCH FEATURES

##### FRONT END 
- [x] Allow users to use an input to filter orders by the email/name of the person who placed the order or the order ID.
- [x] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.

#### BACK END
- [x] Create an endpoint that serves only a single product based on the product's id
- [x] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.

#### DEPLOYMENT
- [x] Deploy website with Heroku & Surge.

### Walkthrough Video
![Walkthrough](demo.gif))
