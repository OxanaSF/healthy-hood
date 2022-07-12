import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {favoritesList: []},
    reducers: {
        addToFavorites(state, action) {
            const item = action.payload
            console.log('item: ', item)
            state.favoritesList.push({...item})
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {loggedIn: true},
    reducers: {
        toggleLoggedIn(state) {
            state.loggedIn = !state.loggedIn
        }
    }
})

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        auth: authSlice.reducer
    }
})

export const favoritesActions = favoritesSlice.actions
export const authActions = authSlice.actions
export default store