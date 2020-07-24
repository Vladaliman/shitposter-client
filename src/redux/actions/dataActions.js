import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
} from "../types";
import axios from "axios";

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
