import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../useAxiosPrivate";
import { listPublishedMasks } from "../../../services/maskService";

export default function useMasks() {
  const axios = useAxiosPrivate();
  return useQuery(["masks"], () => listPublishedMasks(axios));
}
