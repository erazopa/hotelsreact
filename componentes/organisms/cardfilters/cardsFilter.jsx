import { hotelData } from "../../../services/getHotelServices"
import { CardHotel } from "../../molecules/card/card"
import { Header } from "../../molecules/header/header"
import styles from  "./cardsFilter.module.css"


export const CardsFilter = () => {
  console.log(hotelData)
  return (
    <>
    
    <Header />
    <div className={styles.cardsContainer}>
      {hotelData.map((hotel, index) => (
        <CardHotel key={index} hotel={hotel} /> 
        ))}
    </div>
    </>
  );
};