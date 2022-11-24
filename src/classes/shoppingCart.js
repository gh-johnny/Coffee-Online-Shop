export default class shoppingCart{
    #cId;
    #shoppingList = new Map();
    #totalPrice;
    constructor(cId){
        this.#cId = cId
    }
    //The properties are made up
    addToShoopingCart(product){
        //product is an object, as key we will use it's ID, and as value for the map we will use the entire instance of the object
        this.#shoppingList.set(product.pId, product)
    }
    removeProduct(productId) {
        this.#shoppingList.delete(productId);
    }
    searchProduct(productId){
        return this.#shoppingList.has(productId);
    }
    getProduct(productId){
        return this.#shoppingList.get(productId);
    }
    calTotal(){
        let sum = 0;
        for(const product of this.returnValues()){
            sum += product.price * product.amount;
        }
        return sum;
    }
    returnValues(){
        return this.#shoppingList.values();
    }
}