import { fetchData } from "../../utils/fetchData.js";
export async function changeIsDone() {
  const id = this.id;
  const data = { isDone: this.checked };
  try {
    await fetchData(`/api/todos/status/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}
