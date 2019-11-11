$(document).ready(function(){
    
    var total = 0;
    
 //check if valid, JS validation
    function checkResults(total) {
        if(total == 0) {
            $("#numberOfResults").html("<h5>No results were found!<h5>");
            $("#numberOfResults").css("color", "red");
        }
        else
        {
            $("#numberOfResults").html(""); //clear results
            $("#numberOfResults").append("<h5>Search results: "+ total + "</h5>");
            $("#numberOfResults").css("color", "black");
        }
    }
   
    //event handler, AJAX call
    $("#searchInput").on("change", function() {
        $.ajax({
            method: "GET",
            url: "https://pixabay.com/api/",
            dataType: "json",
            data: { "key" : "14237306-c798b71c9b9e330b73f53ecca",
                "q" : $("#searchInput").val(),
                "image_type" : "photo"},
            success: function(result, status) {
                total = result.hits.length;
                
                checkResults(total); //calls the JS validation
                
                $("#results").html(""); //clear results
                for(var i = 0; i < result.hits.length; i++)
                {
                     $("#results").append("<div class='block'><img src='" + result.hits[i].previewURL + "' alt='" + result.hits[i].tags + "'></div>");
                }
            }
        });//ajax
    });//change event

    //event listeners
    $("#searchInput").on("click", function() {
               $("#searchInput").css("background-color", "lightskyblue");
           });
           
    $("#searchInput").on("mouseleave", function() {
               $("#searchInput").css("background-color", "white");
    })
});
