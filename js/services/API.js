class API {
    static addSneakers() {
        fetch("http://localhost:3000/sneakers")
          .then(resp => resp.json())
          .then(sneakers => {
            sneakers.forEach(sneaker => {
                const { id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions } = sneaker
                new Sneaker( id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions )
            })
        }) 
    }

    static addSneaker(e) {
        e.preventDefault()
        let data = {
            'manufacturer': e.target.manufacturer.value,
            'model': e.target.model.value,
            'colorway': e.target.colorway.value,
            'size': e.target.size.value,
            'condition': e.target.condition.value,
            'est_value': e.target.est_value.value,
            'image': e.target.image.value,
            'opinions_attributes': [{
              'name': e.target.name.value,
              'summary': e.target.summary.value
            }]
        };
        fetch('http://localhost:3000/sneakers', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(sneaker => {
            const { id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions } = sneaker
            new Sneaker(id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions)
            document.getElementById('sneaker-form').reset()
        })
    }

    static favoriteSneaker() {
        const fav = parseInt(event.target.parentElement.querySelector(".favorite").innerText.split(" ")[0])
        let updateFavs = fav + 1 
        event.target.parentElement.querySelector(".favorite").innerText = `${updateFavs} favorites`
        const id = parseInt(event.target.parentElement.id)
        fetch(`http://localhost:3000/sneakers/${id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            favorite: updateFavs 
          })
      })
    }

    static copSneaker() {
        const cop = parseInt(event.target.parentElement.querySelector(".cop").innerText.split(" ")[0])
        let updateCops = cop + 1 
        event.target.parentElement.querySelector(".cop").innerText = `${updateCops} cops`
        const id = parseInt(event.target.parentElement.id)
        fetch(`http://localhost:3000/sneakers/${id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cop: updateCops
          })
      })
    }

    static dropSneaker() {
        const drop = parseInt(event.target.parentElement.querySelector(".drop").innerText.split(" ")[0])
        let updateDrops = drop + 1 
        event.target.parentElement.querySelector(".drop").innerText = `${updateDrops} drops`
        const id = parseInt(event.target.parentElement.id)
        fetch(`http://localhost:3000/sneakers/${id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            drop: updateDrops
          })
      })
    }

}