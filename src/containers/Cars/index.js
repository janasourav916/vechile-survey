import { useCallback, useEffect, useMemo, useState } from "react";
import AppList from "../../components/AppList";
import Pagination from "../../components/Pagination";
import SideDrawer from "../../components/SideDrawer";
import UserRow from "../../components/UserRow";
import useUser from "../../hooks/useUser";
import { groupBy } from "../../utils";
import styles from "./styles.module.css";

export default function Cars() {
  const { users } = useUser();
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedRow, setRow] = useState({ data: [] });

  useEffect(() => {
    const formtedData = Object.values(
      groupBy(users, (item) => item.vehicle.model)
    );
    setData(formtedData);
  }, [users]);

  const closeDrawer = useCallback(() => setOpenDrawer(false),[setOpenDrawer]);

  const onView = (data) => {
    setRow(data);
    setOpenDrawer(true);
  };

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  },[setCurrentPage]);

  //render dynamic generate table row
  const renderCarRow = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    return data.slice(startIndex, endIndex).map((item, index) => {
      const startSl = perPage * (currentPage - 1);
      return (
        <tr key={item.key} className={styles.table__row}>
          <td>{(startSl || 1) + index}</td>
          <td>Model - {item?.key?.toUpperCase()}</td>
          <td>{item?.data?.[0]?.vehicle?.make}</td>
          <td>{item?.count}</td>
          <td>
            <button className={styles.btn__view} onClick={() => onView(item)}>
              View
            </button>
          </td>
        </tr>
      );
    });
  }, [perPage, currentPage, data]);

  return (
    <div className={styles.container}>
      {/* cars Table */}
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__row}>
            <th>SL</th>
            <th>Model</th>
            <th>Maker</th>
            <th>Users Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderCarRow}</tbody>
      </table>

      {/* Cars Pagination */}
      <div>
        <Pagination
          currentPage={currentPage}
          perPage={10}
          totalData={data.length}
          setPage={handlePageChange}
        />
      </div>

      {/* users list Drawer */}
      <SideDrawer open={openDrawer} onClose={closeDrawer}>
        <>
          <div className={styles.drawer__header}>
            <h2>Model - {selectedRow?.key?.toUpperCase()}</h2>
            <p>
              Make By <b>{selectedRow?.data?.[0]?.vehicle?.make}</b>
            </p>
          </div>
          <div className={styles.users__container}>
            <AppList data={selectedRow?.data}>
              {({ data }) => <UserRow user={data} />}
            </AppList>
          </div>
        </>
      </SideDrawer>
    </div>
  );
}
