class Human{
  constructor(name,gender,weight) {
      this.name = name;
      this.gender = gender;
      this.weight = weight;
  }
  isMale(){
      return this.gender;
  }
  setGender(gender){
      this.gender= gender;
  }
  checkApple(apple){
     return apple.getAppleWeight();
  }
  eatApple(apple){
      this.weight ++;
      apple.decreaseAppleW();
  }
  say(text){
      console.log(`${this.name} say: ${text}`);
  }
  getName(){
      return this.name;
  }
  setName(name){
      this.name = name;
  }
  getWeight(){
      return this.weight;
  }
  setWeight(weight){
      this.weight = weight;
  }

}