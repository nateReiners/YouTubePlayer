import {
  RECEIVE_VIDEOS,
  RECEIVE_VIDEO
} from '../actions/videoActions';

import { merge } from 'lodash';

const initialState = {
    videos: [],
};

const videoReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      let newState = merge({}, state, { movies: action.videos });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default videoReducer;
