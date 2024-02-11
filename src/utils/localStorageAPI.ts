export const getLocalStorageDate = () => {
  const date = localStorage.getItem("date");
  return date ?? null;
};
