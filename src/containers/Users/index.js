import { useState } from "react";
import AppList from "../../components/AppList";
import UserDetailsDrawer from "../../components/UserDetailsDrawer";
import UserRow from "../../components/UserRow";
import useUser from "../../hooks/useUser";
import styles from "./users.module.css";

export default function Users() {
  const { users } = useUser();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedUser, setUser] = useState({});

  const closeDrawer = () => setOpenDrawer(false);

  const handleSelectUser = (user) => {
    setUser(user);
    setOpenDrawer(true);
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <AppList data={users} onRowClick={handleSelectUser}>
          {({ data: user }) => <UserRow user={user} />}
        </AppList>
      </aside>
      <UserDetailsDrawer
        open={openDrawer}
        onClose={closeDrawer}
        user={selectedUser}
      />
    </div>
  );
}
