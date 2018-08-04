import axios from "axios";
const URL = `https://jsonplaceholder.typicode.com`;
const FIREBASEDB = `https://projectthree-c1ae9.firebaseio.com`;

export function getArticles() {
  const request = axios.get(`${URL}/posts`).then(response => response.data);

  return {
    type: "GET_ARTICLES",
    payload: request
  };
}

export function addPost(post) {
  const request = axios({
    method: "POST",
    url: `${FIREBASEDB}/posts.json`,
    data: post
  }).then(response => response.data);

  return {
    type: "ADD_POST",
    payload: request
  };
}

export function getPosts() {
  const request = axios(`${FIREBASEDB}/posts.json`).then(
    response => {
      let posts = [];

      for (let key in response.data) {
        posts.push({
          ...response.data[key],
          id: key
        });
      }
      return posts;
    }
  );

  return {
    type: "GET_POSTS",
    payload: request
  };
}

export function getPost(POSTID) {
  const request = axios(`${FIREBASEDB}/posts/${POSTID}.json`).then(response => {
    const post = { ...response.data, id: POSTID };
    return post;
  });

  return {
    type: "GET_POST",
    payload: request
  };
}

export function updatePost(POSTID) {
  const request = axios({
    method: "PATCH",
    url: `${FIREBASEDB}/posts/${POSTID}.json`,
    data: { title: "updated title", body: "updated body" }
  }).then(response => response.data);

  return {
    type: "UPDATE_POST",
    payload: request
  };
}

export function deletePost(POSTID) {
  const request = axios({
    method: "DELETE",
    url: `${FIREBASEDB}/posts/${POSTID}.json`
  }).then(response => response.data);

  return {
    type: "DELETE_POST",
    payload: request
  };
}
