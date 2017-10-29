$(document).ready(function()
{
    var bookings = 0;
    
    
    $("#BOOK").on("click", function()
    {
        bookings++;
        document.getElementById("DISPLAY").innerHTML = bookings;
        
    });
});