export const loginUser = (userData) => {
    // console.log("action",userData)
    return {
      type: 'login',
      payload: userData,
    };
  };
  