import { useMutation } from "@tanstack/react-query";
import axios from "../../../api/axios"; // public
import { login } from "../../../services/authService";

export default function useLogin() {
  return useMutation((credentials) => login(axios, credentials));
}
