import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchUsers = () => {
  const result = useQuery(["users"], async () => {
    const { data } = await axios.get("https://api.github.com/users");
    return data;
  });
  return result;
};
