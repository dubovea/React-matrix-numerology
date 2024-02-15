export const getLocalStorageDate = () => {
  const date = localStorage.getItem("date");
  return date ?? null;
};

export const getLocalStorageColors = () => {
  const settings = localStorage.getItem("settings");
  if (settings) {
    const parsedSettings = JSON.parse(settings);
    return parsedSettings;
  }
  return;
};
