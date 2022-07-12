import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {favoritesList: []},
    reducers: {
        
        addToFavorites(state, action) {
            state.favoritesList.push({name: action.payload})
        }
    }
})

const store = configureStore({
    reducer: favoritesSlice.reducer
})

export const favoritesActions = favoritesSlice.actions

export default store