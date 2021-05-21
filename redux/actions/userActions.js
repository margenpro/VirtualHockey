export const SETTER_USER = "SETTER_USER"

export const setterUserAction = ({ id, email, username, role, paymentDate, lastVideo, points, position }) => ({
  type: SETTER_USER,
  payload: { id, email, username, role, paymentDate, lastVideo, points, position }
})

