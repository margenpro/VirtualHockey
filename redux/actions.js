export const USER = 'USER'

export const user = content => ({
    type: USER,
    payload: {
      id: ++nextTodoId,
      content
    }
  });