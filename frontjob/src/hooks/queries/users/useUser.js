import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../useAxiosPrivate";
import { getUserById } from "../../../services/userService";

export default function useUser(id) {
  const axios = useAxiosPrivate();
  return useQuery(["user", id], () => getUserById(axios, id), {
    enabled: !!id,
  });
}
