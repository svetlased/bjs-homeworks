const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(){
   return weapons.map(weapon => weapon.name);
}
function getCountReliableWeapons(strength) {
    return weapons.filter(weapon => weapon.durability > strength).length;
}
function hasReliableWeapons(strength) {
    return weapons.some(weapon => weapon.durability > strength);
}
function getReliableWeaponsNames(strength){
    return weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);
}
function getTotalDamage() {
    return weapons.map(weapon => weapon.attack).reduce(function(a,b){
        return a+b;
    })
}
function getValuestCountToSumValues(arr, sum) {

    arr.reduce((acc, number, index) => {
        if (number <= sum){
          return index-1;
        }
        acc + number;
      });
}

// вторая задача

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}
function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
function compareArrays( arr1, arr2 ) {
    return JSON.stringify(arr1)==JSON.stringify(arr2);
}
function memorize(fn, limit) {
  return function fn() {
    
  }
}

function memorize(fn) {
  let memory = [
   {
     args: [3, 4],
     result: 7
   },
   {
     args: [1, 3],
     result: 4
   }
 ]
   return function(number1, number2){
     console.log(fn(number1, number2)); //замыкание функции fn
     return memory.find(obj => compareArrays(Array.from(arguments).join(', '), obj.args)).result;
   }
 }

 