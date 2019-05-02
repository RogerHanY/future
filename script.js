var player = $(".who");
var game = $(".what");
var time = $(".times");
var hr = $(".hrs");

$("button").click(function() {
    var usernames = player.val();
    var usergames = game.val();
    var usertimes = time.val();
    var userused = hr.val();

    $(".waste").text("In the year of 2050, " + usernames + " have played" +" " + usergames+ " " + "for" + " "+ parseInt(usertimes) * 11200+" "+ "times" +", "+ "it takes"+ " " + parseInt(userused) * 11200 +" " + "hours");

});