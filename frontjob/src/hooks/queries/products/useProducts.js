import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../useAxiosPrivate";
import { listPublishedProducts } from "../../../services/productService";

export default function useProducts() {
  const axios = useAxiosPrivate();
  return useQuery(["products"], () => listPublishedProducts(axios));
}
