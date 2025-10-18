function updateUTCTime() {
      const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
      const now = new Date();
      const utcString = now.toUTCString();
      utcTimeElement.textContent = `Current Time (UTC): ${utcString}`;
  }

  updateUTCTime();
  setInterval(updateUTCTime, 1000); // Update time every second