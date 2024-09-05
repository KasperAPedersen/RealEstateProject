
function contactAgent(id) {
    const modal = document.getElementById('modal');
    modal.innerHTML = '';
  
    const view = document.createElement('div');
    view.id = "contactModal";
    view.classList = "w3-container w3-modal";
    view.style.display = "block";
  
    const myCardData = cardData[id - 1];
  
    view.innerHTML = 
    `<div class="w3-modal-content w3-card-4 lol" style="width: 800px;">
        <header class="w3-container w3-red"> 
            <span onclick="closeModal()" class="w3-button w3-display-topright">&times;</span>
            <h2>Bestil fremvisning til ${myCardData.street}</h2>
        </header>
        
        <div class="w3-container w3-padding">
            <form class="w3-container" action="mailto:agent@example.com">
                
                <input name="listingId" type="text" value="${id-1}" hidden>
                <input name="esateAddress" type="text" value="${myCardData.street} ${myCardData.city}" hidden>

                <div class="w3-half w3-margin-left w3-margin-right">
                    <label class="w3-text-grey"><b>First Name</b></label>
                    <input class="w3-input w3-border" name="first" type="text">
                </div>
                <div class="w3-rest w3-margin-left w3-margin-right">
                    <label class="w3-text-grey"><b>Last Name</b></label>
                    <input class="w3-input w3-border" name="last" type="text">
                </div>
    
                <div class="w3-threequarter w3-margin-left w3-margin-right">
                    <label class="w3-text-grey"><b>Email Address</b></label>
                    <input class="w3-input w3-border" name="email" type="text">
                </div>
    
                <div class="w3-rest w3-margin-left w3-margin-right">
                    <label class="w3-text-grey"><b>Phone number</b></label>
                    <input class="w3-input w3-border" name="phone" type="text">
                </div>
    
                <div class="w3-quarter w3-margin-left w3-margin-right">
                    <label class="w3-text-grey"><b>Subject</b></label>
                    <input class="w3-input w3-border" name="subject" type="text">
                </div>
    
                <div class="w3-rest w3-margin-left w3-margin-right">
                    <label class="w3-text-grey"><b>Message</b></label> 
                    <input class="w3-input w3-border" name="body" type="text">
                </div>

                <button class="w3-btn w3-red w3-margin" style="float: right;">Send></button>
            </form>
        </div>
    </div>`;
  
      modal.appendChild(view);
  }