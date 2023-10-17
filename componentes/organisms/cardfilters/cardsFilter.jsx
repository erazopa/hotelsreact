"use client";
import { useContext, useEffect, useState } from "react";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/app/utils/helper";
import Alert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import { AppContext } from "@/app/store/CurrentProvider";

export const CardsFilter = ({getDataHotels}) => {
  const [selectedCountry, setSelectedCountry] = useState(`all`);
  const [selectedPrice, setSelectedPrice] = useState(`all`);
  const [selectedSize, setSelectedSize] = useState(`all`);
  const [dateHotelFrom, setDateHotelFrom] = useState(`all`);
  const [dateHotelTo, setDateHotelTo] = useState(`all`);
  const [filterHotels, setFilterHotels] = useState([])
  const [showSnackbar, setShowSnackbar] = useState(false);
  const {setHomePage} = useContext(AppContext)

  useEffect(()=>{
    setHomePage
  }, [])
  // const [hotelsData, sethotelsData] = useState([]);



  // const fetchHotels = async() => {
  //   try {
  //   const data = await hotelData();
  //   sethotelsData(data);
  // } catch (error) {
  //   console.error("error en los hoteles");
  // }
  // };
  
  
  // useEffect(() => {
  //   fetchHotels();
  // }, []);

  useEffect(() => {
const dateFrom = new Date(dateHotelFrom);
    const dateTo = new Date(dateHotelTo);
    const todayDate = new Date().setHours(0, 0, 0, 0);
    const dateCheckInLocal = new Date(
      dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000
    );
    const dateCheckOutLocal = new Date(
      dateTo.getTime() + dateTo.getTimezoneOffset() * 60000
    );
    
    const filteredHotels = getDataHotels.filter((hotel) => {
      const availabilityHotels = todayDate + hotel.availabilityFrom;
      const availabilityDays = availabilityHotels + hotel.availabilityTo;
    
      const isCountryMatch =
        selectedCountry === `all` ||
        selectedCountry.toLocaleLowerCase() ===
          hotel.country.toLocaleLowerCase();

      const isPriceMatch =
        selectedPrice === `all` ||
        selectedPrice.toString() === hotel.price.toString();

      const isSizeMatch =
        selectedSize === `all` || selectedSize === hotelRooms(hotel.rooms);

      const availability =
      (dateHotelFrom === `all` && dateHotelTo === `all`) ||
      (dateCheckInLocal.getTime() >= availabilityHotels) &&
      dateCheckOutLocal.getTime() <= availabilityDays;

      return isCountryMatch && isPriceMatch && isSizeMatch && availabilityHotels;
    });
    setFilterHotels(filteredHotels );
  }, [
    selectedCountry,
    selectedPrice,
    selectedSize,
    dateHotelFrom,
    dateHotelTo,
    
  ]
  
  )
  
  //   const filterHotels = () => {
  //   const dateFrom = new Date(dateHotelFrom);
  //   const dateTo = new Date(dateHotelTo);
  //   const todayDate = new Date().setHours(0, 0, 0, 0);
  //   const dateCheckInLocal = new Date(
  //     dateFrom.getTime() + dateFrom.getTimezoneOffset() * 60000
  //   );
  //   const dateCheckOutLocal = new Date(
  //     dateTo.getTime() + dateTo.getTimezoneOffset() * 60000
  //   );
    
  //   const filteredHotels = getDataHotels.filter((hotel) => {
  //     const availabilityHotels = todayDate + hotel.availabilityFrom;
  //     const availabilityDays = availabilityHotels + hotel.availabilityTo;
    
  //     const isCountryMatch =
  //       selectedCountry === `all` ||
  //       selectedCountry.toLocaleLowerCase() ===
  //         hotel.country.toLocaleLowerCase();

  //     const isPriceMatch =
  //       selectedPrice === `all` ||
  //       selectedPrice.toString() === hotel.price.toString();

  //     const isSizeMatch =
  //       selectedSize === `all` || selectedSize === hotelRooms(hotel.rooms);

  //     const availability =
  //     (dateHotelFrom === `all` && dateHotelTo === `all`) ||
  //     (dateCheckInLocal.getTime() >= availabilityHotels) &&
  //     dateCheckOutLocal.getTime() <= availabilityDays;

  //     return isCountryMatch && isPriceMatch && isSizeMatch && availabilityHotels;
  //   });

  //   return filteredHotels;
  // };

  return (
    <>
      <Header
        updateCity={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSize={setSelectedSize}
        updateFrom={setDateHotelFrom}
        updateTo={setDateHotelTo}
      />
        {filterHotels.length > 0 ? (
      <div className={styles.cardsContainer}>
        {filterHotels.map((hotel, index) => (
            <CardHotel key={index} hotel={hotel} snackbar={setShowSnackbar} />
          ))}
      </div>
        ) : (
          <Alert variant="filled" severity="info">
          No hemos encontrado resultado para su busqueda — !Sigue buscando!
        </Alert>
  
        )}
        <Snackbar  open={showSnackbar}
          autoHideDuration={2000}
          onClose={setShowSnackbar}
        >
           <Alert severity="success" sx={{ width: '100%' }}>
    Hotel agragado correctamente
  </Alert>
        </Snackbar>
    </>
  );
};
