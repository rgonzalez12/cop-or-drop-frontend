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



}