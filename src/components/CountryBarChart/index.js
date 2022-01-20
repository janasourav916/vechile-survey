import React, { memo, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import useUser from "../../hooks/useUser";
import { groupBy } from "../../utils";

function CountryBarChart() {
  //get users from users context api
  const { users } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    const formtedData = Object.values(
      groupBy(users, (item) => item.address.country)
    );
    setData(formtedData);
  }, [users]);

  return (
    <ResponsiveContainer aspect={3}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis dataKey="count" />
        <Tooltip />
        <Bar dataKey={"count"} fill="#42A5F5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default memo(CountryBarChart);
