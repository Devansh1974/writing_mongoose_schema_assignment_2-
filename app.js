const mongoose = require('mongoose');
const Blog = require('./schema'); // Import the Blog model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection error:', err));

// Create a new blog post
async function createBlog() {
  const blog = new Blog({
    title: "My First Blog",
    content: "This is the content of the first blog post. It must have at least 50 characters to pass validation.",
    author: "JohnDoe",
    tags: ["intro", "welcome"],
    category: "General",
    likes: ["JaneDoe"],
    comments: [
      { username: "JaneDoe", message: "Great post!" },
    ],
  });

  try {
    const result = await blog.save();
    console.log("Blog created:", result);
  } catch (err) {
    console.error("Error creating blog:", err.message);
  }
}

// Run the function to test
createBlog();
