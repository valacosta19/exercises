fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
.then(response => response.json())
.then (data => {
    var products = data.results;

    let items = document.getElementById('product-items');


        
    for (var i=0; i < products.length; i++) {
        

        fetch (`https://api.mercadolibre.com/items/${products[i].id}`)
        .then(response => response.json())
        .then (data => {
            
            var container = document.createElement('div');
            container.classList.add("item");


            let img = document.createElement('img');
            img.src = data.thumbnail;
            container.appendChild(img);

            if (data.original_price === null) {
                let price = document.createElement('p');
                price.classList.add("price");
                var text4 = document.createTextNode(data.price);
                price.appendChild(text4);
                container.appendChild(price);

            } else {
                var descountPorcentage = data.original_price - data.price;
                var diference = descountPorcentage * 100 / data.original_price;
                var diferenceInteger = Math.floor(diference) + "%" + " " + "de descuento";
                let descount = document.createElement('p');
                var addingClass = descount.classList.add("descount");
                var text5 = document.createTextNode(diferenceInteger);
                descount.appendChild(text5);
                container.appendChild(descount);

                let price = document.createElement('p');
                price.classList.add("price");
                var text4 = document.createTextNode(data.original_price);
                price.appendChild(text4)
                container.appendChild(price);


                let priceAmount = document.createElement('p');
                priceAmount.classList.add("priceAmount");
                var text5 = document.createTextNode(data.price);
                priceAmount.appendChild(text5)
                container.appendChild(priceAmount);
            }

            let title = document.createElement('p');
            title.classList.add("title");
            var text3 = document.createTextNode(data.title);
            title.appendChild(text3);
            container.appendChild(title);


            
            
            items.appendChild(container);
        
        })
    };

});