var btn = document.querySelector("button");
//var isColored = "false";
//
//btn.addEventListener("click", function(){
//    if(isColored){
//        document.body.style.background = "white";
//        isColored = false;
//    }else {
//        document.body.style.background = "purple";
//        isColored = true;
//    }
//    });
    // also both "isColored = " can be removed and in its place "isColored = !isColored;" can be added to the end of the "if" loop
    // this has the same function and is cleaner code

//2nd way to do this w/ even less code:
btn.addEventListener("click", function() {
    document.body.classList.toggle("btn-purp");
});


