class Sneaker {
    constructor(id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions) {
        this.id = id
        this.manufacturer = manufacturer
        this.model = model
        this.colorway = colorway
        this.size = size
        this.condition = condition
        this.est_value = est_value
        this.image = image
        this.favorite = favorite
        this.cop = cop
        this.drop = drop
        this.opinions = opinions
        this.renderSneaker()
    }

    renderSneaker(){
        const sneakerContainer = document.getElementById('sneaker-container')
        const sneakerCard = document.createElement('div')
        sneakerCard.classList.add('sneaker-card')
        sneakerCard.id = this.id
        sneakerCard.innerHTML += this.sneakerHTML()
        sneakerContainer.appendChild(sneakerCard)
        sneakerCard.addEventListener('click', e => {
          if (e.target.className.includes('delete')) this.deleteSneaker(e)
        })
    }

    deleteSneaker(event) {
        const sneakerId = parseInt(event.target.parentElement.id)
        fetch(`http://localhost:3000/sneakers/${sneakerId}`, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json'
          }
      })
      .then (()=> {
        document.getElementById('sneaker-container').removeChild(document.getElementById(sneakerId))
      }) 
    }

    sneakerHTML(){
        return `
          <h2 class="header">${this.model}</h2>
          <img src="${this.image}" width="100" />
          <h5>Manufacturer: ${this.manufacturer}</h5>
          <h5>Colorway: ${this.colorway}</h5>
          <h5>Size: ${this.size}</h5>
          <h5>Condition: ${this.condition}</h5>
          <h5>Estimated Value: ${this.est_value}</h5>
          <p> ${this.favorite} favorites </p>
          <p> ${this.cop} cops </p>
          <p> ${this.drop} drops </p>
          <button onclick=API.favoriteSneaker()> Favorite </button>
          <button onclick=API.copSneaker()> Cop </button>
          <button onclick=API.dropSneaker()> Drop </button>
          <button class= 'delete'> Delete? </button>
          <h5>Summary: </h5>
          ${this.opinions.map(function(opinion){
            return (`${opinion.name} says:
            ${opinion.summary}`)
        })}`
    }

}