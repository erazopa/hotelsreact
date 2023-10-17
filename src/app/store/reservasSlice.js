import { createSlice } from "@reduxjs/toolkit";

export const ReservasSlice =createSlice({
    name:'reservation',
    initialState:{
        hotelReservation:[]
    },
    reducers: {
        addReservation:(state,{payload}) => {
            state.hotelReservation.push(payload);
        }
    }
});

export const {addReservation} = ReservasSlice.actions;