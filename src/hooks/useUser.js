import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default function useUser() {
  const { users } = useContext(UserContext);
  return {
    users
  };
}
