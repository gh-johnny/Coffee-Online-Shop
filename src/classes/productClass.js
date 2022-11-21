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

    totalCal(){
        let Price = 0;
        if(this.amount <= 4){
            Price = this.price
        }else if(this.amount > 4 && this.amount <=9){
            Price = this.price * 0.95
        }else if(this.amount > 9){
            Price = this.price * 0.90
        }

        let optionFee = 0
        let bTypeFee = 0
        let bSizeFee = 0
        if(this.type == "Beverage"){
            optionFee = 0;
            this.amount = 1;
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

        }else if(this.type == "Whole beans"){
            optionFee = 0;
        }else if(this.type == "Gound"){
            optionFee = 1;
        }else if(this.type == "Capsule"){
            optionFee = 3;
        }else if(this.type == "Drip Package"){
            optionFee = 2;
        }

        let Final = ((Price + optionFee + bTypeFee + bSizeFee) * this.amount).toFixed(2);

        return Final
    }
}