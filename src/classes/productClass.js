export class productClass{
    pId;
    coffeeName;
    price;
    type;
    amount;
    bType;
    bTemp;
    bSize;
    constructor(pId, coffeeName, price, type, bType, bTemp, bSize, amount){
        this.pId = pId;
        this.coffeeName = coffeeName;
        this.price = price;
        this.type = type;
        this.bType = bType;
        this.bTemp = bTemp;
        this.bSize = bSize;
        this.amount = amount;
    }

    discount(){
        let Price = this.price; //0
        if(this.type !== "Beverage"){
            if(this.amount <= 4){
                Price = 0
            }else if(this.amount > 4 && this.amount <=9){
                Price = (this.price + this.type) * 0.05
            }else if(this.amount > 9){
                Price = (this.price + this.type) * 0.10
            }
        }else{
            Price = 0
        }
        let discount = (Price * this.amount).toFixed(2)
        return discount
    }


    totalCal(){
        let Price = this.price; //0

        let optionFee = 0
        let bTypeFee = 0
        let bSizeFee = 0
        if(this.type == "Beverage"){
            optionFee = 0;
            if(this.bType == "Esspresso"){
                bTypeFee = 0
            }else if(this.bType == "Americano"){
                bTypeFee = 0
            }else if(this.bType == "Black"){
                bTypeFee = -0.5
            }else if(this.bType == "Latte"){
                bTypeFee = 1
            }else if(this.bType == "Caramel Latte"){
                bTypeFee = 2
            }else if(this.bType == "Caramel Moch"){
                bTypeFee = 2
            }

            if(this.bSize == "Small"){
                bSizeFee = 0
            }else if(this.bSize == "Large"){
                bSizeFee = 1
            }else if(this.bSize == "Very Large"){
                bSizeFee = 2
            }
        }else if(this.type == 0){
            optionFee = 0;
        }else if(this.type == 1){
            optionFee = 1;
        }else if(this.type == 3){
            optionFee = 3;
        }else if(this.type == 2){
            optionFee = 2;
        }

        let Final = ((Price + optionFee + bTypeFee + bSizeFee) * this.amount).toFixed(2);

        return Final
    }

    eachPrice(){
        let Price = this.price;

        let optionFee = 0
        let bTypeFee = 0
        let bSizeFee = 0
        if(this.type == "Beverage"){
            optionFee = 0;
            if(this.bType == "Esspresso"){
                bTypeFee = 0
            }else if(this.bType == "Americano"){
                bTypeFee = 0
            }else if(this.bType == "Black"){
                bTypeFee = -0.5
            }else if(this.bType == "Latte"){
                bTypeFee = 1
            }else if(this.bType == "Caramel Latte"){
                bTypeFee = 2
            }else if(this.bType == "Caramel Moch"){
                bTypeFee = 2
            }

            if(this.bSize == "Small"){
                bSizeFee = 0
            }else if(this.bSize == "Large"){
                bSizeFee = 1
            }else if(this.bSize == "Very Large"){
                bSizeFee = 2
            }
        }else if(this.type == 0){
            optionFee = 0;
        }else if(this.type == 1){
            optionFee = 1;
        }else if(this.type == 3){
            optionFee = 3;
        }else if(this.type == 2){
            optionFee = 2;
        }

        let Final = (Price + optionFee + bTypeFee + bSizeFee).toFixed(2);

        return Final
    }
}