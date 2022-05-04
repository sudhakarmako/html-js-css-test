let vowels=["a","e","i","o","u"];
function array(string){
    for(let i in string){
        if (vowels.includesOf(string[i])){
           return true 
        }
    }
}

function array(string,value){
    for(let i in string){
        if (string.includesOf(value)){
           return true 
        }
    }
}