Delicious_PIZZA_array = [];

function Send() {
var name_1 = document.getElementById("Delicious_PIZZA1").value;
    var name_2 = document.getElementById("Delicious_PIZZA2").value;
    var name_3 = document.getElementById("Delicious_PIZZA3").value;
    var name_4 = document.getElementById("Delicious_PIZZA4").value;
    Delicious_PIZZA_array.push(name_1);
    Delicious_PIZZA_array.push(name_2);
    Delicious_PIZZA_array.push(name_3);
    Delicious_PIZZA_array.push(name_4);

    console.log(Delicious_PIZZA_array);

    document.getElementById("display_name").innerHTML = Delicious_PIZZA_array;
    document.getElementById("Send_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    Delicious_PIZZA_array.sort();
    console.log(Delicious_PIZZA_array);
    document.getElementById("display_name").innerHTML = Delicious_PIZZA_array;
}