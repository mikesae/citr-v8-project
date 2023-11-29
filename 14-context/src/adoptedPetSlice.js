import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      // Assign payload specified in action.
      // It's OK to operate on your parameters; It's what you're supposed to do.
      state.value = action.payload;
    },
    // unadopt: (state, action) => {
    //     state.value = null
    // }
  },
});

// action function is really
// function adopt(pet) {
//     return { type: "adopt", payload: pet}
// }

// Redux toolkit has created an action (function) for us, which we'll call "adopt",
// and we can send into this reducer.
export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
