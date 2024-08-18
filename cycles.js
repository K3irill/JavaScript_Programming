//! 1. Цикл for

let str = 'congratulations!'

for(let i = 0; i < str.length; i++){
    console.log(`for - ${str[i]}`);
    
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log('break')
      break
    }
    console.log(i)
  }

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log('continue')
      continue
    }
    console.log(i)
  }

  const arr = [1, 2, 5, -3, 15, 20, 13, -3, -5, -10, 22, 14]
//* Задача — найти все отрицательные элементы
const found = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    found.push(arr[i])
  }
}
console.log(found)

//! 2. Цикл while
let j = 0
while (j < str.length){
    console.log(`while - ${str[j]}`);
    j++
}
const numbers = [1, 2, 3, 4, 5]
let i = 0
while (i < numbers.length) {
  const currentElement = numbers[i]
  console.log(currentElement * currentElement)
  i++
}

//! 3. Цикл switch
let membershipStatus = 'vip';
switch (membershipStatus) {
    case 'vip':
      // выполнится, если в переменной membershipStatus хранится строка 'vip'
      console.log('Приветствуем вас, ваше великолепие!')
      console.log('рады вас видеть!')
      break
    case 'diamond':
      console.log('Здравствуйте, бриллиантовый клиент!')
      break
    case 'gold':
      console.log('Привет, золотой мой!')
      break
    default:
      // выполнится, если ни один другой случай не сработал
      console.log('Даровчик чел')
      break
  }

/* 
!1. Обязательно ставьте break в конце каждого кейса. Такой код будет хорошо читаться и не приведёт к неожиданным багам.
!2. Всегда добавляйте default блок к своим свитчам. Код приложения постоянно меняется. Когда-нибудь свитч перестанет покрывать все возможные значения переменной и default-случай будет вашей страховкой, которая не даст приложению разломаться.
!3. Если в вашем свитче меньше трёх кейсов, то if...else будет читаться проще.
!4. Если внутри кейса нужно создать переменную, то придётся добавить фигурные скобки, иначе JavaScript упадёт с ошибкой:
*/
switch (variable) {
  case 5: {
    const myVar = 'Hello'
  }
}