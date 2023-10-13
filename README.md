# Microservices-Based Project

Welcome to our Microservices-Based Project repository! This project showcases a microservices architecture for managing books, customers, and orders. In this README, we'll provide an overview of the project, its architecture, and how to get started.

## Introduction

- **Problem**: Our project addresses the need to efficiently manage books, customers, and orders, which are common in various business scenarios.

- **Technologies**: We've used the following technologies in our project:
  - Backend: Node.js, Express, MongoDB
  - Frontend: React
  - Database: MongoDB
  - Communication: HTTP/REST
  - Server: Express.js
  - Microservices architecture

- **Features**:
  - **Books Service**: Manages books, including title, author, number of pages, and publisher.
  - **Customers Service**: Manages customers with their name, age, and address.
  - **Orders Service**: Handles customer book orders with initial and delivery dates.

- **Why Microservices?**: We've chosen a microservices architecture to create loosely coupled, independently deployable services that can scale individually. This architecture promotes flexibility and maintenance.

## Architecture Overview

Our project follows a microservices architecture to create separate, self-contained services for books, customers, and orders.

- **Books Service**: Manages book data, providing endpoints to create, read, update, and delete books.

- **Customers Service**: Manages customer information, allowing CRUD operations on customer data.

- **Orders Service**: Handles the creation and management of customer book orders, including fetching detailed order information.

- **Frontend**: The React frontend consumes the services' APIs, displaying books, customers, and orders to the user.

- **Database**: MongoDB is used to store book, customer, and order data.

- **Communication**: Microservices communicate via HTTP/REST API calls.

### Microservices Architecture - 
<img width="494" alt="microservices-logical" src="https://github.com/NikhilBabhulkar/Micro_Servises/assets/87929600/6b83d19b-78bd-4565-a3ca-44fd6e5a83f0">

## Getting Started

To run this project in your local development environment, follow these steps:

1. **Backend Setup**:
   - Clone this repository.
   - Navigate to the `backend` directory of each microservice (books, customers, and orders).
   - Run `npm install` to install the dependencies.
   - Configure your MongoDB connection in the `db.js` file.
   - Start the backend server for each microservice (e.g., `node index.js`).

2. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Run `npm install` to install the frontend dependencies.
   - Start the frontend application (e.g., `npm start`).

3. Access the application in your web browser at `http://localhost:3001`.

## Usage

- The front end provides a user-friendly interface for viewing and managing books, customers, and orders.
- Use the navigation menu to switch between different views.

## API Documentation

- Our project's APIs are well-documented and self-explanatory. You can explore them by navigating to the following URLs:
  - [Books Service API](http://localhost:3000/docs)
  - [Customers Service API](http://localhost:5000/docs)
  - [Orders Service API](http://localhost:9000/docs)

## Contributing

We welcome contributions from the community. If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.
4. Our team will review your contribution, and it may be merged into the main project.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to reach out to us if you have any questions or need assistance with the project.

Happy coding!
