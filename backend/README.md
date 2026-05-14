# Backend Setup

This is the backend for the Team Task Manager App.

## Prerequisites
- Node.js installed
- MongoDB installed locally OR a MongoDB Atlas account

## How to add MongoDB

### Option 1: Local MongoDB (Default)
1. Install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community).
2. Start the MongoDB service on your machine. It usually runs on `mongodb://127.0.0.1:27017`.
3. The `.env` file is already configured for local MongoDB. Just start the server!

### Option 2: MongoDB Atlas (Cloud)
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster.
2. Under "Database Access", create a new database user with a password.
3. Under "Network Access", add your IP address (or `0.0.0.0/0` to allow from anywhere).
4. Click "Connect" on your cluster, choose "Connect your application", and copy the connection string.
5. Open the `.env` file in this backend folder.
6. Replace the `MONGO_URI` value with your connection string, replacing `<username>` and `<password>` with the user you created.

## Running the Server
1. Navigate to this `backend` directory in your terminal.
2. Run `npm install` (if not already done).
3. Run `node server.js` to start the server.
