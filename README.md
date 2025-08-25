Here is another README in a different format.

-----

# ChatterBox 🚀

A sleek, real-time chat application built with the MERN stack. Connect, chat, and share with a modern and responsive interface.

-----

## 🤔 Why ChatterBox?

ChatterBox was built to provide a seamless and engaging real-time communication experience. The goal was to create a full-stack application that is not only functional but also modern, responsive, and easy to use. This project demonstrates proficiency in the MERN stack, real-time communication with Socket.IO, and a focus on user experience.

-----

## ✨ Features at a Glance

| Feature                 | Status |
| :---------------------- | :----: |
| Real-Time Messaging     |   ✅    |
| User Authentication     |   ✅    |
| Profile Management      |   ✅    |
| Online Status Indicator |   ✅    |
| Image Sharing           |   ✅    |
| Responsive Design       |   ✅    |
| Toast Notifications     |   ✅    |
| Persistent Chat History |   ✅    |
| Animated UI             |   ✅    |

-----

## Of course! Here is the expanded "Tech Stack" section with the Development tools included.

---

### 🛠️ Under the Hood: The Tech Stack

#### **Frontend**
* ⚛️ **React:** A JavaScript library for building user interfaces.
* ⚡️ **Vite:** A fast build tool for modern web projects.
* 🧭 **React Router:** For declarative routing in React.
* 🎨 **Tailwind CSS:** A utility-first CSS framework.
* 📡 **Axios:** A promise-based HTTP client.
* ✨ **Lucide React:** A library of beautiful and consistent icons.
* Zustand: A small, fast and scalable bearbones state-management solution.

#### **Backend**
* 🟩 **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
* 🌐 **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
* 🍃 **MongoDB:** A NoSQL database for storing application data.
* 💾 **Mongoose:** An elegant MongoDB object modeling for Node.js.
* 🔑 **JWT (JSON Web Tokens):** For secure user authentication.
* 🔒 **bcrypt:** A library to help you hash passwords.
* 🔌 **Socket.IO:** For real-time, bidirectional and event-based communication.
* ☁️ **Cloudinary:** A cloud-based image and video management service.

#### **Development**
* nodemon: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* ESLint: A static code analysis tool for identifying problematic patterns found in JavaScript code.

-----

## 🚀 Quick Start Guide

### Prerequisites

  - Node.js (v16 or later)
  - npm
  - MongoDB Atlas account or local MongoDB
  - Cloudinary account

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/VRAJESH-31/chat-app.git
    cd chat-app
    ```

2.  **Setup the Backend:**

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file and add the following:

    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    CLIENT_URL=http://localhost:5173
    ```

3.  **Setup the Frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the Backend:**

    ```bash
    cd backend
    npm run dev
    ```

2.  **Start the Frontend:**

    ```bash
    cd frontend
    npm run dev
    ```

-----

\<details\>
\<summary\>📖 API Endpoints\</summary\>

| Method | Endpoint                  | Description                 | Protected |
| :----- | :------------------------ | :-------------------------- | :-------- |
| `POST` | `/api/auth/signup`        | Register a new user         | No        |
| `POST` | `/api/auth/login`         | Log in and get JWT          | No        |
| `POST` | `/api/auth/logout`        | Log out user                | Yes       |
| `GET`  | `/api/auth/check`         | Check authentication status | Yes       |
| `PUT`  | `/api/auth/update-profile`| Update user profile         | Yes       |
| `GET`  | `/api/message/users`      | Get all users for sidebar   | Yes       |
| `GET`  | `/api/message/:id`        | Get chat messages with user | Yes       |
| `POST` | `/api/message/send/:id`   | Send a message to user      | Yes       |

\</details\>

-----

## 👨‍💻 About the Author

**Vrajesh Pandya**

  * **Date:** August 25, 2025

A passionate full-stack developer with a love for creating intuitive and dynamic web applications.

-----

**Enjoy chatting\!**
