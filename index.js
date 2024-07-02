const currentDay = document.getElementById("day");
const currentTime = document.getElementById("time");

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();

  const today = now.toLocaleDateString("en-EN", { weekday: "long" });

  function getTime() {
    const time = now.toUTCString().split(" ")[4];
    currentTime.textContent = `Time: ${time}`;
    currentDay.textContent = today;
  }

  getTime();
  setInterval(getTime, 1000);
});
