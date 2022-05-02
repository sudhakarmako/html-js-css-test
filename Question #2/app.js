let tests = document.querySelectorAll("button");

tests.forEach(test =>{
test.addEventListener("click",function(){
    let btn__value = test.getAttribute("id")
    let headtxt = document.querySelector("#test")
    if(btn__value == "fav"){
        headtxt.href="favicon.ico"
    }else if(btn__value == "google"){
        headtxt.href="google.ico"
    }else if(btn__value == "youtube"){
        headtxt.href="youtube.ico"
    }else{
        headtxt.href=""
    }
})


})