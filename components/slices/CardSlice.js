import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTo: (state, action) => {
      console.log(state, action);
      console.log("Added to cart");
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default cartSlice.reducer;
