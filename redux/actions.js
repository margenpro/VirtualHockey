export const SETTER_USER = "SETTER_USER"
export const SET_VIDEOS = "SET_VIDEOS"

export const setterUserAction = ({ email, username, role, lastVideo }) => ({
  type: SETTER_USER,
  payload: { email, username, role, lastVideo }
})

export const setVideosAction = (videos) => ({
  type: SET_VIDEOS,
  payload: videos
})