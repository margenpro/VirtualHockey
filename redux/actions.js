const SET_USER = "SET_USER"

export const setUserAction = (user) => ({
  type: SET_USER,
  user
})


// export const user = content => ({
//     type: USER,
//     payload: {
//       id: ++nextTodoId,
//       content
//     }
//   });