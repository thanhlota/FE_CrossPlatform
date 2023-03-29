import axios from "axios";
import Constants from "expo-constants";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { BaseURL } from "../ultis/Constants";
const { manifest } = Constants;
const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
    : `api.example.com`;
const url = `${BaseURL}`;
const postLike = async (id, token) => {
  return axios({
    method: "post",
    url: "/it4788/like/like",
    baseURL: url,
    params: {
      token: token,
      id: id,
    },
  });
};
const imagePost = async (description, formData, token, status) => {
  return axios({
    method: "post",
    url: "/it4788/post/add_post",
    baseURL: url,
    headers: {
      "content-type": "multipart/form-data",
    },
    params: {
      described: description,
      token: token,
      status: status,
    },
    data: formData,
  });
};
const textPost = async (description, token, status) => {
  return axios({
    method: "post",
    url: "/it4788/post/add_post",
    baseURL: url,
    params: {
      described: description,
      token: token,
      status: status,
    },
  });
};
const getPost = async (id, token) => {
  return axios({
    method: "post",
    url: "/it4788/post/get_post",
    baseURL: url,
    params: {
      token: token,
      id: id,
    },
  });
};
const getListPosts = async (index, count, last_id, token) => {
  return axios({
    method: "post",
    url: "/it4788/post/get_list_posts",
    baseURL: url,
    params: {
      token: token,
      index: index,
      count: count,
      last_id: index ? last_id : null,
    },
  });
};
const addComment = async (id, comment, token) => {
  return axios({
    method: "post",
    url: "/it4788/comment/set_comment",
    baseURL: url,
    params: {
      id: id,
      comment: comment,
      token: token,
    },
  });
};
const getComments = async (id, index, count, token) => {
  return axios({
    method: "post",
    url: "/it4788/comment/get_comment",
    baseURL: url,
    params: {
      id: id,
      index: index,
      token: token,
      count: count,
    },
  });
};
const deletePost = async (id) => {
  return axios({
    method: "post",
    url: "/it4788/post/delete_post",
    baseURL: url,
    params: {
      id: id,
    },
  });
};
const editTextPost = async (id, status, description) => {
  return axios({
    method: "post",
    url: "/it4788/post/edit_post",
    baseURL: url,
    params: {
      id: id,
      status: status,
      described: description,
    },
  });
};
const editImagePost = async (id, formData, status, description) => {
  return axios({
    method: "post",
    url: "/it4788/post/edit_post",
    baseURL: url,
    headers: {
      "content-type": "multipart/form-data",
    },
    params: {
      id: id,
      status: status,
      described: description,
    },
    formData: formData,
  });
};
// const addComment =async ()
export {
  postLike,
  imagePost,
  textPost,
  getPost,
  getListPosts,
  addComment,
  getComments,
  deletePost,
  editTextPost,
  editImagePost,
};
