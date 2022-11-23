export class orderClass{
    orderNum;
    orderList;
    shipAddr;
    shipTel;
    cardNum;
    cardExpiry;
    cardCvc;
    totalPrice;
    constructor(oNum,oList,addr,tel,cardnum,expiry,cvc,tPrice){
        this.orderNum = oNum;
        this.orderList = oList;
        this.shipAddr = addr;
        this.shipTel = tel;
        this.cardNum = cardnum;
        this.cardExpiry = expiry;
        this.cardCvc = cvc;
        this.totalPrice = tPrice;
    }
}