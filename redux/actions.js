export const SETTER_USER = "SETTER_USER"

export const setterUserAction = ({ email, username, role, lastVideo }) => ({
  type: SETTER_USER,
  payload: { email, username, role, lastVideo }
})