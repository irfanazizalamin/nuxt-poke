import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listPokemon: [],
};

const PokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    setPokemon(state, action) {
      state.listPokemon = action.payload;
    },
  },
});

export const { setPokemon } = PokeSlice.actions;
export default PokeSlice.reducer;
