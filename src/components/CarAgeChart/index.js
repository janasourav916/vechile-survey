import React, { memo, useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import useUser from "../../hooks/useUser";
import { getHighestAgeOfCarModels, isBetweenEqual } from "../../utils";

function CarAgeChart({ selectAge }) {
  const { users } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    const formtedData = Object.values(
      getHighestAgeOfCarModels(users, (user) => {
        if (selectAge?.value === "") return true;
        else if (isBetweenEqual(user.age, selectAge?.min, selectAge?.max)) {
          return true;
        }
        return false;
      })
    );

    setData(
      formtedData.sort((a, b) => b.heighestAge - a.heighestAge).slice(0, 10)
    );
  }, [users, selectAge]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="heighestAge"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Legend align="right" layout="radial" verticalAlign="center" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
export default memo(CarAgeChart);
