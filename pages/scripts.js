function countdown(elementId, countdownSeconds, redirectUrl) {
    var element = document.getElementById(elementId);
  
    element.textContent = countdownSeconds + ' seconds';
  
    var interval = setInterval(function() {
      countdownSeconds--;
  
      if (countdownSeconds <= 0) {
        clearInterval(interval);
        window.location.href = redirectUrl;
      }
  
      element.textContent = countdownSeconds + ' seconds';
    }, 1000); 
  }
  
  countdown('countdown', 10, 'https://instinzts.github.io/AboutMePage/'); 