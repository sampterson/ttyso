/*!
 * Licensed under Liz and Sam's creative commons
 * All respect goes to Phife Dawg
 */



//I stole this from stack exchange
function testFunction() {
  document.getElementById("demo").innerHTML = "we in business!";
}


/*
* Function to plaster the nav bar to the top of 
* the screen when it gets scrolled there
*/
function stickyNav(){

    var windowTop = $(window).scrollTop();
    var stickyAnchor =  $('#stickyAnchor').scrollTop();
    
    if(windowTop > stickyAnchor){
        $('#homeNavBar').addClass('sticky');
    }
    else{
          $('#homeNavBar').removeClass('sticky');
    }
    
}
