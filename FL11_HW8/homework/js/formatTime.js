function formatTime(inputMinutes) {
  const minutes = inputMinutes % 60;
  const hours = inputMinutes < 1440 ? Math.floor(inputMinutes / 60) : Math.floor((inputMinutes % 1440) / 60); // 1440 is amount of minutes in a day (24*60)
  const days = Math.floor(inputMinutes / 1440);
  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}
console.log(formatTime(120));