let cardData = [];

document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('listingBody');
  cardContainer.innerHTML = '';

  fetch('/getAllListings')
    .then(response => response.json())
    .then(data => {
        cardData = data;
        document.getElementById("listingCount").innerHTML = cardData.length;
        data.forEach(cardData => {
        const cardElement = createCard(cardData);
        cardContainer.appendChild(cardElement);
        })
    });
});

document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

    fetch(`/searchListings?term=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('listingBody');
            cardContainer.innerHTML = '';
            data.forEach(cardData => {
                const cardElement = createCard(cardData);
                cardContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error:', error));
})

function closeModal(){
    document.getElementById('modal').innerHTML = '';
}
