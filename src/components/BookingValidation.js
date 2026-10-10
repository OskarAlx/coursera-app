export const validateDate = (date) => {
  if (!date) return false;

  const selectedDate = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return !Number.isNaN(selectedDate.getTime()) && selectedDate >= today;
};

export const validateGuests = (guests) => {
  const numberOfGuests = Number(guests);

  return (
    guests !== "" &&
    Number.isInteger(numberOfGuests) &&
    numberOfGuests >= 1 &&
    numberOfGuests <= 10
  );
};

export const validateTime = (time, availableTimes) => {
  return availableTimes.includes(time);
};
