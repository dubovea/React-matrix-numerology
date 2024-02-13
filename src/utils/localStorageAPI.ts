export const getLocalStorageDate = () => {
  const date = localStorage.getItem("date");
  return date ?? null;
};

export const getLocalStorageColors = () => {
  const color = localStorage.getItem("color");
  if (color) {
    const parsed = JSON.parse(color);
    return parsed;
  }
  return;
};
