// Import mongoose
const mongoose = require('mongoose');

// Define the Comment schema (subdocument)
const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    description: "Username of the commenter",
  },
  message: {
    type: String,
    required: true,
    description: "The comment text",
  },
  commentedAt: {
    type: Date,
    default: Date.now,
    description: "Timestamp when the comment was created",
  },
});

// Define the Blog Post schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    description: "Title of the blog post",
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
    description: "Content of the blog post",
  },
  author: {
    type: String,
    required: true,
    description: "Username of the author",
  },
  tags: {
    type: [String],
    description: "Tags or keywords for the blog post",
  },
  category: {
    type: String,
    default: "General",
    description: "Category of the blog post",
  },
  likes: {
    type: [String],
    description: "Usernames of people who liked the post",
  },
  comments: [commentSchema], // Embedded comments
  createdAt: {
    type: Date,
    default: Date.now,
    description: "Timestamp when the blog post was created",
  },
  updatedAt: {
    type: Date,
    description: "Timestamp when the blog post was last updated",
  },
});

// Export the Blog model
module.exports = mongoose.model('Blog', blogSchema);
