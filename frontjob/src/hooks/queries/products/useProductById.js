import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../useAxiosPrivate";
import { getProductById } from "../../../services/productService";

export default function useProductById(id) {
  const axios = useAxiosPrivate();
  return useQuery(["product", id], () => getProductById(axios, id), {
    enabled: !!id,
  });
}
