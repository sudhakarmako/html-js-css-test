// let arrOfNum = ;
let new_array=[]
function get_input(arrOfNum){
            arrOfNum.forEach(function(item){
                console.log("itemmm",item)
                !new_array.includes(item) ?new_array.push(item) : ""  
            })
            console.log("answerr",new_array);
        }
        get_input([1, 2, 2, 4, 5, 6, 6])
