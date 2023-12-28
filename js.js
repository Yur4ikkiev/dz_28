let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let Kitchen = {
    category: "kitchen"
};
let Devices = { 
    category: "devices"
};
let Cosmetics = { 
    category: "cosmetics"}

let modProducts = [];
let getProto = (arr, proto) => {
    return arr.map((products) => {
    let newProducts = Object.create(proto);
    for (let key in products) {
        newProducts[key] = products[key];
    }
    return newProducts;
    });
};

let arr = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics),

]

let renderall = [];
let newarr = [];

arr.forEach((element) => {
    element.map((obj) => {
        renderall.push (`
        <div class="category__box">
            <div class="category__img">
                <img src="images/${obj.type}.svg" alt="${obj.type}"/>
            </div>
            <div class="category__title">
                <p class="title__name">
                    Name: $${obj.type}
                </p>
                <p class="title__price">Price: $${
                    Array.isArray(obj.price) === true?
                    String(obj.price[0]) + String(obj.price[1]):
                    obj.price
                }
                </p>
            </div>
        </div>
        `);
    });
});

let res = arr.map((row) => { 
        return (`<div class="category">
                    <h2>Category: ${row[0]?.category}</h2>
                    <div class="category__group">` + `${row.map((box) => `
                            <div class="category__box">
                                <div class="category__img">
                                    <img src="images/${box.category}/${box.type}.svg" alt="${box.type}"/>                  
                                </div>
                                <div class="category__title">
                                    <p class="title__name">
                                        Name: <b>${box.type}</b>
                                    </p>
                                    <p class="title__price">
                                        Price: <b>$${
                                                Array.isArray(box.price) === true?
                                                String(box.price[0]) + "-" + String(box.price[1]):
                                                box.price
                                        }</b>
                                    </p>
                                </div>
                            </div>
                        `)
                    .join("")    
                }
                    </div>
                </div>`
            );
}).join("");

let container = document.getElementById("container");

container.innerHTML = res;
