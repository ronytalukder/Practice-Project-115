//banner venu box start
$(document).ready(function () {
    $('.venobox').venobox();
});
//banner venu box end

//banner perallax start
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
//banner perallax end

//represention counterup start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//represention counterup end


//speacker timer start

var countDownDate = new Date("Jan 31, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day2").innerHTML = days
    document.getElementById("hour2").innerHTML = hours
    document.getElementById("min2").innerHTML = minutes
    document.getElementById("sec2").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



//speacker timer end
