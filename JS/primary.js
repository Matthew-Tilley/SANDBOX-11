$(document).ready(function()
{
    var bookings = 0;
    
    
    $("#BOOK").on("click", function()
    {
        bookings++;
        document.getElementById("DISPLAY").innerHTML = bookings;
        
        if (bookings > 10)
        {
            document.getElementById("DISPLAY").innerHTML = "NO VACANCY";
        }
        
    });
    
    
    $("#CANCEL").on("click", function()
    {
        if (bookings > 10)
        {
            bookings = 10;
            bookings --;
            document.getElementById("DISPLAY").innerHTML = bookings;
        }
        
        else
        {
            bookings--
            document.getElementById("DISPLAY").innerHTML = bookings;
        }
    })
    
    
    
    
});