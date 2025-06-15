import { useMutation } from "@tanstack/react-query";
import axios from "../../../api/axios"; // public
import { register } from "../../../services/authService";

export default function useRegister() {
  return useMutation((data) => register(axios, data));
}
