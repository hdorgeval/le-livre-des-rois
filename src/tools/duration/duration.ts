export const toHours = (durationInMinutes: number): number => {
  const durationInHours = durationInMinutes / 60;
  if (durationInHours <= 1) {
    return 1;
  }

  return Math.round(durationInHours + 1);
};

export const toMinutes = (durationInMinutes: number): number => {
  const durationInTenthOfHour = Math.floor(durationInMinutes / 10 + 1);
  return 10 * durationInTenthOfHour;
};
