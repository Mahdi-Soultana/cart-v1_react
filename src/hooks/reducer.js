function reducer(state, action) {
  switch (action.type) {
    case "remove_Product": {
      let tmpData = [...state.data];
      tmpData = tmpData.filter((product) => product.id !== action.payload);
      return {
        ...state,
        data: tmpData,
      };
    }
    case "increase_Amount": {
      let tmpData = [...state.data];
      tmpData = tmpData.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            amount: product.amount++,
          };
        }
        return product;
      });

      return {
        ...state,
        data: tmpData,
      };
    }
    case "decrease_Amount": {
      let tmpData = [...state.data];
      tmpData = tmpData
        .map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              amount: product.amount--,
            };
          }
          return product;
        })
        .filter((product) => product.amount >= 1);
      return {
        ...state,
        data: tmpData,
      };
    }
    case "check_Data": {
      let { totalAmount, totalPrice } = state.data.reduce(
        (acc, cc) => {
          acc.totalAmount += cc.amount;
          acc.totalPrice += cc.price * cc.amount;
          return acc;
        },
        { totalAmount: 0, totalPrice: 0 },
      );

      return {
        ...state,
        totalAmount,
        totalPrice: Number(totalPrice.toFixed(2)),
      };
    }

    default:
      return state;
  }
}

export default reducer;
