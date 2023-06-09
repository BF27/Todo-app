import { fetchData } from "../../utils/fetchData.js";

export async function getTodos() {
  const url = "/api/todos";
  const todos = fetchData(url);

  return todos;
}
