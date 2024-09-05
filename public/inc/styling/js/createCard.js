function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.innerHTML = 
    `<div class="cardImage">
        <img src="${item.thumbnail}" onclick="viewListing(${item.id}) style="cursor:pointer;" />
        <p>${item.street}, ${item.city}</p>
    </div>
    <div class="cardDetails">
        <h3>${item.price}<br><span>M2-pris: ${Math.round(item.price / item.squareMeters)} kr</span></h3>
        <div class="cardStats">
            <div>
                <p><i class="fa fa-home" aria-hidden="true"></i>${item.squareMeters} m2</p>
                <p><i class="fa fa-bed" aria-hidden="true"></i>${item.rooms}</p>
            </div>
        </div>
        <div class="clearFix"></div>
        <div class="cardContact">
            <div>
                <button onclick="viewListing(${item.id})">Se bolig</button>
            </div>
            <div>
                <button onclick="contactAgent(${item.id})">Kontakt mælger</button>
            </div>
        </div>
    </div>
    <div class="clearFix"></div>`;
  
    return card;
}