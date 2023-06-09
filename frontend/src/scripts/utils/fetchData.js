/**
 * send HTTP request
 * @param {string} url 
 * @param {object} data 
 * @returns response data
 */
export async function fetchData(url, data = {}) {
  const response = await fetch(url, data);
  const resData = await response.json();

  return resData;
}