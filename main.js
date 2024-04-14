document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("button");

    button.addEventListener("click", function() {
       
        document.body.style.backgroundColor = getRandomColor();

       
        alert("Działa!");
    });

  
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
