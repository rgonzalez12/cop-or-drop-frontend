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
          if (e.target.className.includes('update')) this.updateSneaker(e)
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

    updateSneaker(event) {
      const sneakerCondition = event.target.parentElement.querySelector(".update").innerText
      const sneakerId = parseInt(event.target.parentElement.id)
      fetch(`http://localhost:3000/sneakers/${sneakerId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('used')
      })
      .then (updatedCondition => updatedCondition.json())
      .then (newestCondition => {
        document.getElementById(sneakerCondition).innerText(newestCondition)
      })
    }

    sneakerHTML(){
        return `
          <h2 class="header">${this.model}</h2>
          <img src="${this.image}" width="100" />
          <h5>Manufacturer: ${this.manufacturer}</h5>
          <h5>Colorway: ${this.colorway}</h5>
          <h5>Size: ${this.size}</h5>
          <h5 class="condition">Condition: ${this.condition}</h5>
          <h5>Estimated Value: $ ${this.est_value}</h5>
          <p class="favorite"> ${this.favorite} favorites </p>
          <p class="cop"> ${this.cop} cops </p>
          <p class="drop"> ${this.drop} drops </p>
          <button onclick=API.favoriteSneaker()> Favorite </button>
          <button onclick=API.copSneaker()> Cop </button>
          <button onclick=API.dropSneaker()> Drop </button>
          <button class= 'update'> Update Condition </button>
          <button class= 'delete'> Delete? </button>
          <h5>Summary: </h5>
          ${this.opinions.map(function(opinion){
            return (`${opinion.name} says:
            ${opinion.summary}`)
        })}`
    }

}