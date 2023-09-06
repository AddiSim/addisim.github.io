const phrases = [
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "Konnichiwa",
    "Ni hao",
    "Hæ",
    // Add more phrases as needed
  ];

  const enterView = document.getElementById("EnterView");
  const languageText = document.getElementById("languageText");
  const homeScreen = document.getElementById("homeScreen");
  
  let currentIndex = 0;
  
  function displayNextPhrase() {
    if (currentIndex < phrases.length) {
      languageText.textContent = phrases[currentIndex];
      languageText.style.opacity = 1; // Make languageText fully visible
      enterView.style.opacity = 1; // Make EnterView fully visible
  
      // Cool transition for languageText
      setTimeout(() => {
        languageText.style.transition = "opacity 0.5s ease-in-out";
        languageText.style.opacity = 0; // Fade out languageText
        setTimeout(() => {
          currentIndex++;
          displayNextPhrase();
        }, 500); // Faster transition duration and delay
      }, 500); // Faster transition duration and delay
    } else {
      // All phrases have been displayed, fade out both EnterView and languageText
      enterView.style.transition = "opacity 0.5s ease-in-out";
      enterView.style.opacity = 0;
      languageText.style.opacity = 0;
      setTimeout(() => {
        enterView.style.display = "none";
        homeScreen.style.display = "block";
      }, 500); // Faster transition duration and delay before showing the home screen
    }
  }
  
  // Start the animation when the page loads
  window.addEventListener("load", displayNextPhrase);