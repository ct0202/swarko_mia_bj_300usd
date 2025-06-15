import { useMutation } from "@tanstack/react-query";
import useAxiosPrivate from "../../useAxiosPrivate";
import { updateUser } from "../../../services/userService";

export default function useUpdateUser() {
  const axios = useAxiosPrivate();
  return useMutation(({ id, data }) => updateUser(axios, id, data));
}
