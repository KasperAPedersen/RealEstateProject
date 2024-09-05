var slideIndex = 1;

function plusDivs(newIndex) {
  showDivs(slideIndex += newIndex);
}

function currentDiv(newIndex) {
  showDivs(slideIndex = newIndex);
}

function showDivs(newIndex) {
  let imageSlides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (newIndex > imageSlides.length) slideIndex = 1;
  if (newIndex < 1) slideIndex = imageSlides.length;

  for (i = 0; i < imageSlides.length; i++) {
    imageSlides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }

  imageSlides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

function createSlideShow(id){
    let result = "";
    for (let i = 0; i < cardData[id-1].images.length; i++)
    {
      result += `<img class="mySlides" src="${cardData[id-1].images[i]}" style="width:100%">`
    }
  
    return result;
}