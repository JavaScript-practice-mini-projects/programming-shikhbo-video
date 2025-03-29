// function myFunc(num){
//     console.log(num)
// }

const laptop = { 
    brand: "Dell", 
    model: "Inspiron 15", 
    processor: "Intel Core i5", 
    ram: "8GB", 
    storage: "512GB SSD" 
};

function addToProduct(product){
    console.log(`brand nam is ${product.brand}. mode is ${product.model}. ram is ${product.ram}`);
}

addToProduct(laptop);