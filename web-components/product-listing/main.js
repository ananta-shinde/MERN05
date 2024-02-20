
var products =[ {
    id : 1,
    image_url:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
    name : "Motorola G34 5G (Ocean Green, 128 GB)  (8 GB RAM)",
    price: 25000,
    rating: 4.2,
    discount : 50
},{
    id : 2,
    image_url:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/j/d/-original-imagtqqddnkayg4x.jpeg?q=70",
    name : "Motorola G34 5G (Ocean Green, 128 GB)  (8 GB RAM)",
    price: 25000,
    rating: 4.2,
    discount : 20
}
]

var root = document.getElementById("root");
var structure = "";

// for(var i=0;i<products.length;i++){
//     structure = structure + ` <div class="card" style="width:18rem">
// <img src="${products[i].image_url}"/>
// <p>${products[i].name}</p>
// <p class="badge bg-success">${products[i].rating}</p>
// <p><span class="display-6">${(products[i].price*(100-products[i].discount))/100}</span><span class="text-decoration-line-through text-muted">${products[i].price}</span><span class="text-success">${products[i].discount}% OFF</span><p>
// </div>`
// }

 structure = products.map((p)=>(` <div class="card" style="width:18rem">
<img src="${p.image_url}"/>
<p>${p.name}</p>
<p class="badge bg-success">${p.rating}</p>
<p><span class="display-6">${(p.price*(100-p.discount))/100}</span><span class="text-decoration-line-through text-muted">${p.price}</span><span class="text-success">${p.discount}% OFF</span><p>
</div>`))

root.innerHTML = structure;
 


