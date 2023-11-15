# Order Management API Documentation

## Overview

This document outlines the API endpoints for the Order Management System. The API allows for creating, retrieving, updating, deleting, and searching for orders.

### Base URL

http://localhost:5000/api/orders

## Endpoints

### 1. Create Order

- **URL**: `/`
- **Method**: `POST`
- **Body**:
  - `title`: String (required)
  - `description`: String (required)
  - `price`: Number (required)
  - `status`: String (defaults to 'Pending')
  - `user`: Object containing user details
- **Response**: The created order object

### 2. Get All Orders

- **URL**: `/`
- **Method**: `GET`
- **Response**: Array of all order objects

### 3. Get Order By ID

- **URL**: `/:id`
- **Method**: `GET`
- **Response**: Order object with the specified ID

### 4. Update Order

- **URL**: `/:id`
- **Method**: `PUT`
- **Body**:
  - `status`: String
- **Response**: Updated order object

### 5. Delete Order

- **URL**: `/:id`
- **Method**: `DELETE`
- **Response**: Success message

### 6. Search Orders by Title

- **URL**: `/search/:title`
- **Method**: `GET`
- **Response**: Array of order objects that match the search query
