class Sneaker{
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

    renderAnime(){
        const sneakerContainer = document.getElementById('sneaker-container')
        const sneakerCard = document.createElement('div')
        sneakerCard.classList.add('anime-card')
        sneakerCard.id = this.id
        sneakerCard.innerHTML += this.sneakerHTML()
        sneakerContainer.appendChild(sneakerCard)
        sneakerCard.addEventListener('click', e => {
          if (e.target.className.includes('delete')) this.deleteSneaker(e)
        })
    }

    


}