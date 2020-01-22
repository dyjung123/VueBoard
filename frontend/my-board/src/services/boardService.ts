import { defaultGet, defaultPost, defaultPut, defaultDelete } from './defaultAPI';

const createPost = async (data) => {
  return defaultPost('board/write', data);
};

const getPost = async(postId) => {
  return defaultGet('board/find', postId);
};

const getPosts = async () => {
  return defaultGet();
};

const updatePost = async (postId, data) => {
  return defaultPut('board/update', postId, data);
};

const deletePost = async (postId) => {
  return defaultDelete('board/delete', postId);
};

export {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
}
