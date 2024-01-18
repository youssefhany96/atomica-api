# Blog Application Documentation

## Overview

This blog application allows users to perform CRUD operations on blog posts and comments. It is built with the MERN stack (MongoDB, Express.js, React, and Node.js). 

## Installation

Before you begin, ensure you have MongoDB, Node.js, and npm/yarn installed on your system.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository/atomica-api.git
2. **Navigate to the project directory:**
   ```bash
     cd atomica-api
3. **Install backend dependencies:**
   ```bash
     npm install
4. **Navigate to the client directory:**
   ```bash
     cd client
5. **Install frontend dependencies:**
   ```bash
     npm install
6. **Start the backend server:**
   ```bash
     npm start
7. **Start the React application:**
   ```bash
     cd client
     npm start
   
## Environment Setup

Create a .env file in the root of the project and add the following environment variables:

```makefile
CONNECTION_STRING=your_mongodb_uri
PORT=your_preferred_port_for_express_server
```
## Usage

The application supports the following operations:

- **List Posts**: Displays all the blog posts.
- **View Post**:  Detailed view of a single blog post along with its comments..
- **Add Post**: Allows users to add a new blog post.
- **Edit Post**: Users can update an existing blog post.
- **Delete Post**: Users can delete a blog post.
- **Add Comment**: Users can add comments to a blog post.
- **Edit Comment**: Users can edit an existing comment.
- **Delete Comment**: Users can delete a comment..

## API Endpoints

### Posts

- `GET /api/posts` - Fetch all posts.
- `POST /api/posts` - Create a new post.
- `GET /api/posts/:id` - Fetch a single post by ID.
- `PUT /api/posts/:id` - Update a post by ID.
- `DELETE /api/posts/:id` - Delete a post by ID.

### Comments

- `POST /api/comments/:postId` - Add a comment to a post.
- `GET /api/comments/:postId` - Get all comments for a post.
- `PUT /api/comments/:commentId` - Update a comment.
- `DELETE /api/comments/:commentId` - Delete a comment.

## Contributing

Contributions to the project are welcome. Please follow the standard fork, branch, and pull request workflow.
