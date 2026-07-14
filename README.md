# ElectroHub Frontend

https://maheeshvarma-ugge.github.io/Electrohub/

# ElectroHub Backend

A RESTful backend application built using **Node.js**, **Express.js**, and **MongoDB** for managing an e-commerce platform. The backend provides APIs for handling customer orders, seller products, customer messages, user profiles, and seller profiles while serving the frontend application from the `public` directory.

---

# 1. Project Overview

ElectroHub Backend is the server-side application responsible for managing the business logic and database operations of the ElectroHub platform.

The project allows customers and sellers to interact with the system through REST APIs. The backend stores and retrieves data from MongoDB and sends JSON responses to the frontend. It also serves the frontend files located in the `public` folder.

---

# 2. Tech Stack

### Backend Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

### Development Tools

* Visual Studio Code
* MongoDB Compass
* Git & GitHub
* Postman

---

# 3. Project Structure

```
Electrohub_Backend/
│
├── models/
│   ├── Message.js
│   ├── Order.js
│   ├── Profile.js
│   ├── SellerProduct.js
│   └── SellerProfile.js
│
├── routes/
│   ├── messages.js
│   ├── orders.js
│   ├── profile.js
│   ├── sellerProducts.js
│   └── sellerProfile.js
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

---

# 4. Project Architecture

## Frontend

The frontend is the user interface (UI) of the ElectroHub application. It is the part that users interact with through their web browser.

### Responsibilities

* Displays products
* Shows seller information
* Allows customers to place orders
* Sends customer messages
* Displays customer profiles
* Displays seller profiles
* Sends HTTP requests to backend APIs
* Displays responses received from the backend

The frontend communicates with the backend using REST APIs.

In this project, the frontend files are stored inside the **public/** folder and are served by the Express server.

---

## Backend

The backend is the server-side part of the application. It receives requests from the frontend, processes the requested operations, interacts with MongoDB, and returns the required data as JSON responses.

### Responsibilities

* Receives API requests
* Processes business logic
* Performs CRUD operations
* Stores and retrieves data from MongoDB
* Manages customer orders
* Manages seller products
* Manages customer messages
* Manages customer profiles
* Manages seller profiles
* Sends JSON responses back to the frontend

The backend is built using:

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## How Frontend and Backend Communicate

```
User

   │

   ▼

Frontend (HTML, CSS, JavaScript)

   │
HTTP Request

   ▼

Express Server

   │

Routes

   │

Models

   │

MongoDB

   │

JSON Response

   │

Frontend Updates the UI
```

---

## Example Workflow

### Customer Places an Order

```
User
   │
   ▼
Frontend Order Form
   │
POST /api/orders
   │
   ▼
Express Server
   │
Orders Route
   │
Order Model
   │
MongoDB
   │
JSON Response
   │
Frontend Shows Success Message
```

Example Response

```json
{
    "success": true,
    "message": "Order placed successfully"
}
```

---

# 5. Features

* RESTful API architecture
* MongoDB database integration
* Customer order management
* Seller product management
* Customer profile management
* Seller profile management
* Customer message management
* JSON API responses
* Express middleware
* Environment variable support
* CORS enabled
* Frontend served through Express

---

# 6. Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Electrohub_Backend.git
```

## Navigate to Project

```bash
cd Electrohub_Backend
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/electrohub
```

---

## Running the Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server URL

```
http://localhost:5000
```

---

# 7. API Endpoints

## Orders

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | /api/orders          | Retrieve all orders |
| POST   | /api/orders          | Create a new order  |
| PATCH  | /api/orders/:orderId | Update an order     |
| DELETE | /api/orders/:orderId | Delete an order     |

---

## Messages

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | /api/messages     | Retrieve all messages |
| POST   | /api/messages     | Create a message      |
| DELETE | /api/messages/:id | Delete a message      |

---

## Seller Products

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| GET    | /api/seller-products     | Retrieve seller products |
| POST   | /api/seller-products     | Add a new product        |
| PUT    | /api/seller-products/:id | Update a product         |
| DELETE | /api/seller-products/:id | Delete a product         |

---

## Customer Profile

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | /api/profile | Retrieve customer profile |
| PUT    | /api/profile | Update customer profile   |

---

## Seller Profile

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | /api/seller-profile | Retrieve seller profile |
| PUT    | /api/seller-profile | Update seller profile   |

---

# 8. How the Project Works

The backend follows a layered architecture.

### Step 1

The user interacts with the frontend.

↓

### Step 2

The frontend sends an HTTP request to an API endpoint.

↓

### Step 3

Express receives the request.

↓

### Step 4

The appropriate route handles the request.

↓

### Step 5

The route communicates with the corresponding Mongoose model.

↓

### Step 6

The model performs database operations in MongoDB.

↓

### Step 7

MongoDB returns the requested data.

↓

### Step 8

Express sends a JSON response back to the frontend.

↓

### Step 9

The frontend updates the user interface with the received data.

---

## Request Flow

```
Browser

   │

Frontend

   │

HTTP Request

   ▼

Express Server

   │

Routes

   │

Models

   │

MongoDB

   │

JSON Response

   │

Frontend
```

---

# 9. Additional Information

## Dependencies

* express
* mongoose
* dotenv
* cors
* nodemon

---

## Available Scripts

Install Packages

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

Run Production Server

```bash
npm start
```

---

## Sample JSON Response

```json
{
    "success": true,
    "message": "Data fetched successfully",
    "data": []
}
```

---

## Future Improvements

* JWT Authentication
* Role-based Authorization
* Image Upload
* Payment Gateway Integration
* Search & Filtering
* Pagination
* Order Tracking
* API Documentation using Swagger
* Input Validation
* Unit Testing

---

# 10. Author & License

## Author

**Maheesh Varma Ugge**

B.Tech – Computer Science Engineering

Backend Developer

---

## License

This project is developed for educational and learning purposes.
