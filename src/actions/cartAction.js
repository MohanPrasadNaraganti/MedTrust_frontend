export const cartAddAction = (cartData) => {
  // console.log(cartData,"action")
    return {
      type: 'add',
      payload: cartData,
    };
   
  };
export const cartRemoveAction = (cartData) => {
    
    return {
        type: 'remove',
        payload: cartData,
      };
   
  };
  