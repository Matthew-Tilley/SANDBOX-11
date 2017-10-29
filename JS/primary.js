$(document).ready(function()
{
    var bookings = 0;
    
    
    $("#BOOK").on("click", function()
    {
        bookings++;
        document.write(bookings);
        
    });
});