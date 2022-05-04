var new_array=[]

function array_fucntion(array){
console.log("array",array);
array.forEach(e=>{
    console.log("e",e,"check",e in new_array);
if(e in new_array){
    return
}
else{
    new_array.push(e)
    return new_array
}
})

}
array_fucntion([1, 2, 2, 4, 5, 6, 6])