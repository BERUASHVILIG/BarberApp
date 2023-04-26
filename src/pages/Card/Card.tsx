import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BarberItem } from "../../@types/general";

const Card = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [barber, setBarber] = useState<BarberItem>({
    id: "",
    firstName: "",
    lastName: "",
    rating: 0,
    review: [{ author: "", score: 0, comment: "" }],
    description: "",
    price: 0,
  });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/data.json`);
      const json = await response.json();
      const barber = json.find((barber: BarberItem) => barber.id === id);
      setBarber(barber);
    }
    fetchData();
  }, [id]);

  const navigatedashbord = () => {
    navigate("/");
  };

  return (
    <div>
      <div key={barber.id}>
        <div
          style={{
            backgroundColor: "#121212",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            padding: "14px",
          }}
        >
          <button
            style={{ backgroundColor: "green" }}
            onClick={navigatedashbord}
          >
            Back to Dashboard
          </button>
          <h1>
            {barber.firstName} - {barber.lastName}
          </h1>
          <h1>{barber.price} $</h1>
          <h1>{barber.rating} Rating</h1>
          <h2>{barber.description}</h2>
          <h2>{}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
