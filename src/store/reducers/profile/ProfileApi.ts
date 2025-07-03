export const getBelance = async () => {
  const res = await fetch("http://localhost:8080/api/v1/user/info-balance", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};
