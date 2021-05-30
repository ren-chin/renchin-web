export const wattageList = [
  1500, 1400, 1300, 1200, 1000, 900, 800, 700, 600, 500, 400, 300, 200,
].map((wattage) => {
  return {
    id: wattage,
    name: `${wattage}`,
  };
});
