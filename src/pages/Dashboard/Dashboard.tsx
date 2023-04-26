import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarberItem } from "../../@types/general";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import BacktoTop from "../../components/Scroll/BacktoTop";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<BarberItem[]>([
    // {
    // id: "",
    // firstName: "",
    // lastName: "",
    // rating: 0,
    // review: [{ author: "", score: 0, comment: "" }],
    // description: "",
    // price: 0,
    // },
  ]);

  const { t } = useTranslation();

  const [hoveredBarber, setHoveredBarber] = useState<BarberItem | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, []);

  const handleMouseOver = (barber: BarberItem) => {
    setHoveredBarber(barber);
  };

  const handleMouseOut = () => {
    setHoveredBarber(null);
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <button onClick={() => i18next.changeLanguage("en")}>ENG</button>
      <button onClick={() => i18next.changeLanguage("ge")}>GEO</button>
      <div style={{ float: "right" }}>
        <button onClick={navigateLogin}>Log Out</button>
      </div>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,300px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {data.map((barber) => {
          return (
            <div
              key={barber.id}
              onMouseOver={() => handleMouseOver(barber)}
              onMouseOut={handleMouseOut}
            >
              <div style={{ backgroundColor: "grey", padding: "12px" }}>
                <h1>Barber - {barber.id}</h1>
                <h1>
                  {/* {barber.firstName} - {barber.lastName}{" "} */}
                  {t("global.name")}: {barber?.firstName}
                </h1>
                <h1>
                  {t("global.lastName")}: {barber?.lastName}
                </h1>
                <h2>
                  {t("global.rating")}: {barber?.rating}
                </h2>
                <Link style={{ color: "white" }} to={`/barber/${barber.id}`}>
                  visit page to see more information
                </Link>
              </div>
              {hoveredBarber && hoveredBarber.id === barber.id && (
                <div style={{ backgroundColor: "lightgrey", padding: "12px" }}>
                  <p>
                    {hoveredBarber.firstName} - {hoveredBarber.description}
                  </p>
                  <p>Price: {hoveredBarber.price} $</p>
                </div>
              )}
            </div>
          );
        })}
        <BacktoTop />
      </div>
    </div>
  );
};

export default Dashboard;
