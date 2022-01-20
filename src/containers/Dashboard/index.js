import { useMemo, useState } from "react";
import Card from "../../components/Card";
import CarAgeChart from "../../components/CarAgeChart";
import CarModelChart from "../../components/CarModelChart";
import CountryBarChart from "../../components/CountryBarChart";
import { userAgeOptions } from "../../constant";
import styles from "./dashbaord.module.css";

export default function Dashbaord() {
  const [selectAge, setAge] = useState({
    value: "",
    min: "",
    max: ""
  });

  const handleSelectAge = (value) => {
    const [min, max] = value.split("-");
    setAge({ value, min, max });
  };

  const renderAgeOptions = useMemo(() => {
    return userAgeOptions.map(({ label, value }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ));
  }, []);

  return (
    <div>
      <div className={styles.bar__container}>
        <div className={styles.bar__content}>
          <h1 className={styles.chart__title}>Country Users</h1>
          <CountryBarChart />
        </div>
      </div>
      <div className={styles.filter_container}>
        <div>
          <p>Select Age Range </p>
          <select
            value={selectAge.value}
            onChange={(e) => handleSelectAge(e.target.value)}
          >
            <option value="">All</option>
            {renderAgeOptions}
          </select>
        </div>
      </div>
      <div className={styles.pie__container}>
        <div className={styles.pie__content}>
          <h1 className={styles.chart__title}>Car Models</h1>
          <CarModelChart selectAge={selectAge} />
        </div>
        <div className={styles.pie__content}>
          <h1 className={styles.chart__title}>Heighest Aged Car Models</h1>
          <CarAgeChart selectAge={selectAge} />
        </div>
      </div>
    </div>
  );
}
