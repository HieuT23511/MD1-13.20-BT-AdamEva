class Apple {
    constructor(weight) {
    this.weight = weight;
    }
    decreaseAppleW(){
        this.weight --;
    }
    isEmpty(){
        if(this.weight ===0){
            return true;
        }else {
            return false;
        }
    }
    getAppleWeight(){
        return this.weight
    }
}
