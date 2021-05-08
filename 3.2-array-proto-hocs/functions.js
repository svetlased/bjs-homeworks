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
    return weapons.reduce((a,b) => a + b.attack, 0)
}

function getValuestCountToSumValues(arr, sum) {
  return arr.reduce((acc, num) => {
      if (acc.sum < sum) {
          acc.count++;
          acc.sum+= num;
          return acc;
      } else {
        return acc; 
        }
  }, { sum: 0, count: 0}).count}

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
// function compareArrays( arr1, arr2 ) {
//     return JSON.stringify(arr1)==JSON.stringify(arr2); // !!every необходимо использовать не только перебираемый элемент, но и позицию перебираемого элемента
// }
function compareArrays( arr1, arr2 ) {
  return arr1.every((num, i) => num === arr2[i]) && arr1.length === arr2.length ;
}
// function memorize(fn, limit) {
//   return function fn() {
    
//   }
// }

function memorize(fn, limit) {
  debugger; // добавить лимит
  let memory = []
  return function(...numbers){
    console.log(fn(...numbers)); //замыкание функции fn
    let search = memory.find(obj => compareArrays(numbers, obj.args));
    if (search) {  //проверка, если есть нужный нам объект
      return search.result; 
    } 
      memory.push({
        args: numbers,
        result: fn(...numbers)
      });
    if (memory.length > limit) {
      memory.splice((limit-1), 1);
    }
    return fn(...numbers);
}
}
//
testCase(1,2,3);
testCase(1,2);
testCase(9,5,2,4);

function testCase(testFunction, text){


  let array = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(text);
  for (let i = 0; i < 100; i++) {
    array.forEach((element) => testFunction(...element)); 
  }
  console.timeEnd(text);
}