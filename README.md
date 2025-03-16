
# Real-Time Chat Application

![App Image](/front-end/public/app-image.png)

A real-time chat application built using React.js and Node.js with WebSocket communication (Socket.IO) for real-time messaging. This project supports user authentication, chat history, and online user tracking.This also supports image upload and image sharing feature which has been built using cloudinary services.

## Features

- **User Authentication**: Secure login and signup functionality.
- **Upload Profile image**: You can Upload Your Profile image.
- **Send image data**: You can send image as well.
- **Real-Time Messaging**: Messages are sent and received instantly using Socket.IO.
- **Online User Tracking**: Displays a list of online users.
- **Chat History**: Fetches and displays chat history on login.
- **Responsive Design**: Works seamlessly across different screen sizes.

---

## Tech Stack

- **Frontend**: React.js, CSS , Tailwind , DaisyUI
- **Backend**: Node.js, Express.js , Zustand
- **Database**: MongoDB
- **WebSocket**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT)

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git
- A modern web browser

---

## Getting Started

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/ankit-j23/mychat_application.git
cd mychat_application
```

### 2. Install Dependencies

#### Backend
Navigate to the `server` directory and install the dependencies:

```bash
cd backend
npm install
```
also run the queries present inside data.sql

#### Frontend
Navigate to the `client` directory and install the dependencies:

```bash
cd ../frontend
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `backend` or `server` directory and add the following variables:

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

```

### 4. Start the Application

#### Backend
Start the server:

```bash
cd server
npm run dev
```

#### Frontend
Start the client:

```bash
cd ../client
npm run dev
```

---

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Register a new account or log in with an existing one.
3. Start a chat with other users in real time.

---

## Project Structure

```
/client       - React frontend
/server       - Node.js backend
README.md     - Project documentation
```

---

## Troubleshooting

- **User not authenticated**: Ensure the JWT token is being stored in `localStorage` and included in API requests.
- **Database connection error**: Verify your MongoDB instance is running and the `MONGO_URI` is correct.

---

## License

This project is licensed under the MIT License.

---

## Contributors

- Ankit Kumar

--- 
