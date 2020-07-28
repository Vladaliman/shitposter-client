import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_SCREAM,
} from "../types";
import axios from "axios";

export const getScream = (screamId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/scream/${screamId}`)
    .then((res) => {
      dispatch({ type: SET_SCREAM, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getScreams = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/screams")
    .then((res) => {
      dispatch({ type: SET_SCREAMS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_SCREAMS,
        payload: [],
      });
    });
};

export const postScream = (newScream) => (dispacth) => {
  dispacth({ type: LOADING_UI });
  axios
    .post("/scream", newScream)
    .then((res) => {
      dispacth({ type: POST_SCREAM, payload: res.data });
      dispacth({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispacth({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const likeScream = (screamId) => (dispacth) => {
  axios
    .get(`/scream/${screamId}/like`)
    .then((res) => {
      dispacth({ type: LIKE_SCREAM, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const unlikeScream = (screamId) => (dispacth) => {
  axios
    .get(`/scream/${screamId}/unlike`)
    .then((res) => {
      dispacth({ type: UNLIKE_SCREAM, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const deleteScream = (screamId) => (dispacth) => {
  axios
    .delete(`/scream/${screamId}`)
    .then(() => {
      dispacth({ type: DELETE_SCREAM, payload: screamId });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
