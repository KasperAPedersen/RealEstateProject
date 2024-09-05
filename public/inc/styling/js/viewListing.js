function viewListing(id) {
    const modal = document.getElementById('modal');
    modal.innerHTML = '';
  
    const view = document.createElement('div');
    view.id = "listingModal";
    view.classList = "w3-container w3-modal";
    view.style.display = "block";
  
    const myCardData = cardData[id - 1];
  
    view.innerHTML = `<div class="w3-modal-content w3-margin-top w3-card-4" style="width: 1000px;">
        <header class="w3-container w3-red"> 
          <span onclick="closeModal()" 
          class="w3-button w3-display-topright">&times;</span>
          <h2>${myCardData.street}</h2>
        </header>
        <div class="w3-container">
            <div class="w3-content w3-display-container" style="max-width:100%">
                ${createSlideShow(id)}
                <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
                <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
                <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
                <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
                <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
                <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
                </div>
            </div>
            <div class="w3-row">
                <div class="w3-half w3-container">
                    <h2>${myCardData.price} kr.</h2>
                </div>
                <div class="w3-half w3-container">
                      <div class="modalStats">
                          <p><i class="fa fa-home" aria-hidden="true"></i>${myCardData.squareMeters}</p>
                          <p><i class="fa fa-bed" aria-hidden="true"></i>${myCardData.rooms}</p>
                      </div>
                      <p>${myCardData.description}</p>
                </div>
            </div>
            <div class="listingModalMap w3-padding-large">
              <iframe 
                width="100%"
                height="350"
                src="https://www.openstreetmap.org/export/embed.html?bbox=${myCardData.coordinates.longitude-0.005},${myCardData.coordinates.latitude-0.005},${myCardData.coordinates.longitude+0.005},${myCardData.coordinates.latitude+0.005}&layer=mapnik&marker=${myCardData.coordinates.latitude},${myCardData.coordinates.longitude}"
                style="border:none">
              </iframe>
            </div>
        </div>
    </div>`;

    modal.appendChild(view);

    showDivs(slideIndex);
}