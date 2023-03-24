let apple1 = new Apple(10);
let adam = new Human('adam',true,60);
let eva = new Human('eva',false,50);
adam.say(`'Hello baby. I'm ${adam.name}! I'm .`);
console.log(adam);
eva.say(`'Hello ${adam.name}. My name is ${eva.name}! Nice to meet you, too.`);
console.log(eva);
console.log(`${adam.name} kiem tra tao. Qua tao con ${adam.checkApple(apple1)} dv `);
adam.eatApple(apple1);
console.log(`${adam.name} an tao. ${adam.name} tang can len ${adam.getWeight()} dv`)
console.log(`Qua tao con: ${apple1.getAppleWeight()} dv`);
console.log(`${eva.name} kiem tra tao. Qua tao con ${eva.checkApple(apple1)} dv `);
eva.eatApple(apple1);
console.log(`${eva.name} an tao. ${eva.name} tang can len ${adam.getWeight()} dv`)
console.log(`Qua tao con: ${apple1.getAppleWeight()} dv`);


