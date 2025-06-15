import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../useAxiosPrivate";
import { getMaskDetails } from "../../../services/maskService";

export default function useMaskById(id) {
  const axios = useAxiosPrivate();
  return useQuery(["mask", id], () => getMaskDetails(axios, id), {
    enabled: !!id,
  });
}
