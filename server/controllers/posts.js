import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
  res.send("routes/posts getPosts works");
};

export const createPosts = (req, res) => {
  res.send("routes/posts createpost works");
};
