"use client"
import { useSelector } from "react-redux";
import { CardHotel } from "../../molecules/card/card";

export const HotelsReservation = () => {
    const listHotelReservation = useSelector(
        (state) => state.reservation.hotelReservation
      );
    return (
    <div>
        {listHotelReservation.map((hotel, index)=>(
        <CardHotel key={index} hotel={hotel}/>
    ))}
    </div>
    );
};
