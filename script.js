document.addEventListener("DOMContentLoaded", () => {
  const clockEl = document.getElementById("live-clock");

  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime + 6 * 3600000);

    const hours = String(targetTime.getHours()).padStart(2, "0");
    const minutes = String(targetTime.getMinutes()).padStart(2, "0");

    clockEl.textContent = `${hours}:${minutes}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
});
