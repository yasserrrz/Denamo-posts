# React Posts Management App

This project is a **Posts Management App** developed using **React** and **Ant Design**, built as part of a coding test for a DINAMO interview. The application demonstrates CRUD (Create, Read, Update, Delete) operations with a responsive UI, following modern React development practices.

---

## Features

- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Post Management**: View, create, edit, and delete posts seamlessly.
- **Dynamic Table**: Interactive table for displaying posts with pagination and actions.
- **Modular Architecture**: Clean and reusable component structure.
- **Styled with Ant Design**: Uses the Ant Design library for UI components.
- **Axios for API Calls**: Fetches and updates data from a mock API.

---

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Ant Design**: UI library for professional-looking components.
- **Axios**: HTTP client for making API requests.
- **TypeScript**: Strongly-typed JavaScript for improved code quality.
- **CSS**: CSS for styling components.

---

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yasserrrz/Denamo-posts.git
   cd dinamo-react-test


2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Project Structure

```
src
├── components
│   ├── DataTable.tsx       # Component for displaying the posts in a table
│   ├── PostForm.tsx        # Form component for adding/editing posts
├── assets                  # SVG icons and images
├── App.tsx                 # Main application entry point
├── App.css                 # Global styles
├── types
│   └── Post.ts             # TypeScript interface for Post data
└── index.tsx               # ReactDOM entry file
```

---

## API Integration

This app integrates with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for managing posts.

### Endpoints Used:

1. **Get All Posts**:
   - `GET /posts`
   - Used to fetch the list of posts.

2. **Update a Post**:
   - `PUT /posts/:id`
   - Updates a specific post.

3. **Delete a Post**:
   - `DELETE /posts/:id`
   - Deletes a specific post.

---

## Usage

1. **View Posts**:
   - Posts are displayed in a table with pagination.
   - Each row includes post details and actions.

2. **Add a New Post**:
   - Click the "Add Post" button.
   - Fill in the title and body in the modal form.

3. **Edit a Post**:
   - Click the edit icon in the Actions column.
   - Modify the post details in the modal and submit.

4. **Delete a Post**:
   - Click the delete icon in the Actions column.
   - Confirm the deletion in the modal.

---

## Future Enhancements

- **Add Backend Integration**: Replace the mock API with a real backend service.
- **Form Validation**: Enhance validation for better error handling.
---

## Author

**Yasser Mohamed**  
[GitHub Profile](https://github.com/yasserrrz)  
[LinkedIn Profile](https://www.linkedin.com/in/yasser-mohamed-5ba73a198)

---

