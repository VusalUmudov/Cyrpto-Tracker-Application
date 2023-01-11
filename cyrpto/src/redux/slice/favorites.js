import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    products: []
  },
  reducers:{
    addProductToFavorites: (state,action)=>{
      state.products.push(action.payload)
      toast.success('Added to favorites!');
    },
    removeProductFromFavorites: (state,action) => {
      state.products.splice(state.products.findIndex(product=>product.id===action.payload),1)
      toast.success('Removed from favorites!');
    },
    clearFavorites: (state)=>{
      console.log(state);
      state.products=[];
      toast.success('Favorites cleared!');
    }
  }
})


export const { addProductToFavorites, removeProductFromFavorites, clearFavorites } = FavoritesSlice.actions
export default FavoritesSlice;