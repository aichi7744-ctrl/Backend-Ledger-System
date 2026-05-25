# Backend Ledger System

## Introduction

Backend Ledger System is a backend application designed to manage and track financial transactions securely and efficiently. The system records all debit and credit operations in a structured ledger format and provides APIs for transaction management, account balance tracking, and financial reporting.

This project focuses mainly on backend development concepts such as REST APIs, database management, authentication, transaction handling, error management, and scalable server architecture.

The system can be used for:
- Banking applications
- Expense tracking systems
- Wallet systems
- Accounting software
- Payment platforms
- Financial management applications

---

# Project Objectives

The main objectives of this project are:

- To build a secure ledger management backend
- To record debit and credit transactions
- To maintain accurate account balances
- To provide REST APIs for transaction operations
- To implement authentication and authorization
- To learn scalable backend architecture

---

# Features

## User Authentication

The system allows users to:
- Register an account
- Login securely
- Access protected routes
- Manage sessions using JWT authentication

Passwords are encrypted before storing in the database.

---

## Account Management

Users can:
- Create accounts
- View account details
- Check balances
- Update account information

Each account maintains its own transaction history.

---

## Transaction Management

The ledger system supports:
- Credit transactions
- Debit transactions
- Transaction history
- Transaction validation
- Real-time balance updates

Every transaction is stored permanently for tracking and auditing.

---

## Ledger Recording

The ledger keeps records of:
- Transaction ID
- Amount
- Transaction type
- Date and time
- Account information
- Description

This helps maintain transparency and financial accuracy.

---

## Balance Calculation

The backend automatically calculates:
- Current balance
- Total credits
- Total debits
- Transaction summaries

---

## API-Based Architecture

The system provides REST APIs for:
- Authentication
- Account management
- Transactions
- Ledger reports

These APIs can be integrated with:
- Web applications
- Mobile apps
- Third-party services

---

# Technologies Used

## Backend

### Node.js
Used as the server runtime environment.

### Express.js
Used to build REST APIs and backend routes.

---

## Database

### MongoDB
Used for storing:
- User data
- Account details
- Ledger records
- Transactions

### Mongoose
Used for MongoDB schema management and database operations.

---

## Authentication

### JWT (JSON Web Token)
Used for secure user authentication.

### bcrypt.js
Used for password hashing and security.

---

# Folder Structure

```bash
Backend-Ledger-System/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── config/
│   └── app.js
│
├── tests/
│
├── package.json
├── README.md
└── .env
