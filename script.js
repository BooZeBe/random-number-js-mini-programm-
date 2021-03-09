const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min)

let randomNumber = getRandom(0, 1000)

if (randomNumber.toString().length > 2) {
  const twoIndexNumber = Math.round(Math.random())
  
  console.log(twoIndexNumber)

  if (twoIndexNumber === 1) {
    randomNumber = Number(randomNumber.toString().slice(1))
  }
}


console.log(randomNumber)