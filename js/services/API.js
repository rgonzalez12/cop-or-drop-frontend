class API {
    static addSneakers(){
        fetch("http://localhost:3000/sneakers")
          .then(resp => resp.json())
          .then(sneakers => {
            sneakers.forEach(sneaker => {
                const { id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions } = sneaker
                new Sneaker( id, manufacturer, model, colorway, size, condition, est_value, image, favorite, cop, drop, opinions )
            })
        }) 
    }

    
}