# Friend Search API (Backend)

Friend Search is a web application with a backend API built to support the frontend. The backend is responsible for handling data storage and serving API requests to the frontend.

## Getting Started

These instructions will help you set up and run the Friend Search backend API on your local machine.

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- Node.js: [Download](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js
- MongoDB Atlas

### Installation

1. Clone the backend repository to your local machine:

   ```bash
   git clone https://github.com/your-username/friend-search-backend.git`

   ```

2. Navigate to the project directory:

   `cd friend-search-backend`

3. Install the project dependencies:

   `npm install`

### Configuration

1.  Create a `.env` file in the project root and configure your environment variables:

        `PORT=3000

    MONGODB_URI=your-mongodb-uri
    SECRET_KEY=your-secret-key`

        Replace `your-mongodb-uri` with your MongoDB connection URI and `your-secret-key` with a secret key for authentication.

2.  Update the `config.js` file to load environment variables:

    `require('dotenv').config();`

### Database Setup

1.  Ensure that MongoDB is running on your system.
2.  Create a new database for the Friend Search backend.

### Running the Server

1.  Start the backend server:

    `npm start`

2.  The backend API should now be running at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- `GET /images/:imageName`: Retrieve images by name.
- `GET /api/posts`: Retrieve a list of posts.
- `GET /api/posts/:postId`: Retrieve a specific post by ID.
- `POST /api/posts/create`: Create a new post.
- `GET /api/users`: Retrieve a list of users.
- `GET /api/users/:userId`: Retrieve a specific user by ID.

You can use tools like Postman or curl to test these API endpoints.

## Contributing

Contributions are welcome! If you'd like to contribute to this backend project, please follow these steps:

1.  Fork the backend repository.
2.  Create a new branch for your feature or bug fix: `git checkout -b feature-name`
3.  Commit your changes: `git commit -m 'Add new feature'`
4.  Push to your fork: `git push origin feature-name`
5.  Submit a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests if necessary.
