import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  product: Array<any>;
  totalAmount: number;
  totalQty: number;
  size:string
}

const initialState: CounterState = {
  product: [],
  totalAmount: 0,
  totalQty: 0,
  size:"S"
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions:PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.totalQty += actions.payload.quantity
    },
    product: (state, actions:PayloadAction<any>) => {
      
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.product = state.product + actions.payload
    },
    removeFromCart: (state, actions:PayloadAction<any>) => {
      console.log(actions)
      state.totalQty -= actions.payload.quantity

    },
    clearCart: (state) => {
      state= initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer