
// for showing slideshow in home.html
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

let i;
let slides = document.getElementsByClassName("introSlides");
let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  try {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  } catch (error) {
      console.log("Error showSlides funcation not on page")
  }
  //slides[slideIndex-1].style.display = "block";
  
}

// Gear Page showing content
function showGearContent(gear) {

  document.getElementById("gear_boots_content").style.display = 'none';
  document.getElementById("gear_tents_content").style.display = 'none';
  document.getElementById("gear_bags_content").style.display = 'none';
  let content = document.getElementById(`gear_${gear}_content`);
  content.style.display = "block";
  

  // console.log(content);
  

}

//Trip Ideas Accordion

let acc = document.getElementsByClassName("accordion");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;

      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } 
      else {
        panel.style.display = 'block';
      }
  });
}

// Knowledge Page

  //Weather Information
function getWeather(){

  let zipCode = document.getElementById("zip_code").value;
  let validZipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;


  let weatherInfo = document.getElementById("weather_info");

  // console.log("1");
  // console.log(zipCode);

  if(validZipTest.test(zipCode)){

    console.log("1");

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&APPID=0fac7a457adf5c6c2e82f4dc021ae9d0&units=imperial`)
      .then(response => {
        return response.json()
      })
      
      .then(function (obj) {
        // console.log(obj.main.temp)

        weatherInfo.innerHTML = `Current Temperature: ${JSON.stringify(obj.main.temp)}&#176F<br>`;
        weatherInfo.innerHTML += `High: ${JSON.stringify(obj.main.temp_max)}&#176F<br>`
        weatherInfo.innerHTML += `Low: ${JSON.stringify(obj.main.temp_min)}&#176F`

      })

      .catch((error) => {
        console.log("something wrong")
      });
  }
  else {
    weatherInfo.innerHTML = "Zipcode not valid. Please re-enter zip. "
  }

}


