var button = document.getElementById("button");
var text = document.getElementById("text");

var done1 = document.getElementById("btn1a")
var done2 = document.getElementById("btn2a")
var done3 = document.getElementById("btn3a")
var done4 = document.getElementById("btn4a")
var done5 = document.getElementById("btn5a")
var done6 = document.getElementById("btn6a")

var can1 = document.getElementById("btn1b")
var can2 = document.getElementById("btn2b")
var can3 = document.getElementById("btn3b")
var can4 = document.getElementById("btn4b")
var can5 = document.getElementById("btn5b")
var can6 = document.getElementById("btn6b")

var go1 = document.getElementById("btn1c")
var go2 = document.getElementById("btn2c")
var go3 = document.getElementById("btn3c")
var go4 = document.getElementById("btn4c")
var go5 = document.getElementById("btn5c")
var go6 = document.getElementById("btn6c")

done1.addEventListener("click", function() {
    document.getElementById("one").innerHTML = "done";
    setTimeout(function() {
        document.getElementById("one").innerHTML = "";
    }, 2000);
});
done2.addEventListener("click", function() {
    document.getElementById("two").innerHTML = "done";
    setTimeout(function() {
        document.getElementById("two").innerHTML = "";
    }, 2000);
});
done3.addEventListener("click", function() {
    document.getElementById("three").innerHTML = "done";
    setTimeout(function() {
        document.getElementById("three").innerHTML = "";
    }, 2000);
});
done4.addEventListener("click", function() {
    document.getElementById("four").innerHTML = "done";
    setTimeout(function() {
        document.getElementById("four").innerHTML = "";
    }, 2000);
});
done5.addEventListener("click", function() {
    document.getElementById("five").innerHTML = "done";
    setTimeout(function() {
        document.getElementById("five").innerHTML = "";
    }, 2000);
});
done6.addEventListener("click", function() {
    document.getElementById("six").innerHTML = "done";
    setTimeout(function() {
        document.getElementById("six").innerHTML = "";
    }, 2000);
});

go1.addEventListener("click", function() {
    var myVal = document.getElementById("text").value;
    document.getElementById("one").innerHTML = myVal;
})

go2.addEventListener("click", function(){
    var myVal2 = document.getElementById("text").value;
    document.getElementById("two").innerHTML = myVal2;
})

go3.addEventListener("click", function() {
    var myVal3 = document.getElementById("text").value;
    document.getElementById("three").innerHTML = myVal3;
})

go4.addEventListener("click", function() {
    var myVal4 = document.getElementById("text").value;
    document.getElementById("four").innerHTML = myVal4;
})

go5.addEventListener("click", function() {
    var myVal5 = document.getElementById("text").value;
    document.getElementById("five").innerHTML = myVal5;
})

go6.addEventListener("click", function() {
    var myVal6 = document.getElementById("text").value;
    document.getElementById("six").innerHTML = myVal6;
})
can1.addEventListener("click", function() {
    document.getElementById("one").innerHTML = ""
})
can2.addEventListener("click", function() {
    document.getElementById("two").innerHTML = ""
})
can3.addEventListener("click", function() {
    document.getElementById("three").innerHTML = ""
})
can4.addEventListener("click", function() {
    document.getElementById("four").innerHTML = ""
})
can5.addEventListener("click", function() {
    document.getElementById("five").innerHTML = ""
})
can6.addEventListener("click", function() {
    document.getElementById("six").innerHTML = ""
})


