function updateClock() {
    const hourHand = document.querySelector('.hours');
    const minuteHand = document.querySelector('.mints');
    const secondHand = document.querySelector('.seconds');
  
    const now = new Date();
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hoursRotation = (hours % 12) * 30 + (minutes / 2); 
    const minutesRotation = minutes * 6; 
    const secondsRotation = seconds * 6; 
  
    hourHand.style.transform = `translateX(-50%) rotate(${hoursRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesRotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondsRotation}deg)`;
  }
  
 
  setInterval(updateClock, 1000);
  
  updateClock();
  