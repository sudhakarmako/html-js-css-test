const words= "hey this is kavin"
const captialize =words.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')
console.log(captialize)
