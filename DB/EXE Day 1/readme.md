# Simple School System  
Node.js + Express + MySQL (Docker)

A very small CRUD project for learning how to connect an Express server to a MySQL database running in Docker.

This project is focused on:
- Express routing
- MySQL connection using `mysql2`
- Basic SQL (SELECT / INSERT / UPDATE / DELETE)
- Clean request / response handling
- One table only (no relations, no joins)

---

## Project Goal

Build an Express server that manages students in a school using a single MySQL table.

Students will learn:
- How to run MySQL in Docker
- How a Node.js server connects to a database
- How API endpoints trigger SQL queries
- How CRUD works end-to-end (HTTP → SQL → Response)

---

## Tech Stack

- Node.js
- Express
- MySQL
- Docker
- mysql2 (`mysql2/promise`)
- dotenv

---

## Environment Setup

### 1. Run MySQL using Docker

Run the following command **once** to download and start MySQL in Docker:

```bash
docker run -d --name school_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=school_db -p 3306:3306 -v school_mysql_data:/var/lib/mysql mysql:8.0
```
check
```bash
docker ps
```
install this
```bash

npm init -y
npm i express mysql2 dotenv
```

