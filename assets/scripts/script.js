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

  function hideAndShow(section){
    var element = document.getElementsByClassName("home_aboutme")[0];
    element.style.opacity = 0;

    setTimeout(() => {
      if (section === 'projects'){
        element.innerHTML = '<p>Project 1</p><p>Project 2</p>';
      } else if (section === 'contact'){
        element.innerHTML = '<p>Contact information</p>';
      } else if (section === 'home'){
        element.innerHTML = '<span>Born in 1996</span><span>in Neskaupstaður, Iceland.</span><span>Currently</span><span>studying</span><span>computer science</span><span>at Háskóli Íslands.</span><span>Have great</span><span>interest</span><span>in web design</span><span>and data science.</span>'
      }

      setTimeout(() => {
        element.style.opacity = 1;
      }, 200);
    }, 500);
  }