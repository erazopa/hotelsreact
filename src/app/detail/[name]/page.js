"use client";
import React, { useContext, useEffect, useState } from "react";
import { MainButton } from "../../../../componentes/atoms/button/Button";
import styles from "./page.module.css";
import { AppContext } from "@/app/store/CurrentProvider";

const Detail = () => {
  const [selectedHotel, setSelectedHotel] = useState({
    name: "",
    description: "",
    photo: "",
    country: "",
    city: "",
  });

  const { setDetailPage } = useContext(AppContext);

  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedHotel");
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
    setDetailPage();
  }, []);
  const { name, photo, description, country, city } = selectedHotel;

  return (
    <div className={styles.container}>
      <img
        src={photo}
        width={300}
        height={300}
        className={styles.detailImagen}
      />
      <h2 className={styles.name}>{selectedHotel.name}</h2>
      <p className={styles.text}>{description}</p>
      <p>Pais:{country}</p>
      <p>Ciudad:{city}</p>
      <div className={styles.buttonsContainer}>
        <MainButton className={styles.buttonCardHotel}>Reservar</MainButton>
        <MainButton className={styles.buttonSecondary}>Favoritos</MainButton>
      </div>
    </div>
  );
};

export default Detail;
