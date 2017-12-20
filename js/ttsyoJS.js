/*!
 * Licensed under Liz and Sam's creative commons
 * All respect goes to Phife Dawg
 */


/*
* Function to plaster the nav bar to the top of 
* the screen when it gets scrolled there
*/
function stickyNav() {

    var windowTop = $(window).scrollTop();
    var stickyAnchor =  $('#stickyAnchor').scrollTop();
    
    if (windowTop > stickyAnchor ){
        $('#homeNavBar').addClass('sticky');
    }
     else{
          $('#homeNavBar').removeClass('sticky');
    }
    
}


/*Sets the width of ttsyoCaptions on photos*/
function setCaptionWidth( img ){
    //gets the last child of the parent node - div -> <p> and
    //sets that width the the img width
    console.log("In the new function");
    console.log("image width: " + img.width);
    img.parentNode.lastElementChild.style.width = img.width + "px";
    img.parentNode.lastElementChild.style.opacity = .9;
    
    //set onMouseLeave
    img.onmouseout = function(){
        img.parentNode.lastElementChild.style.opacity = 0;
    }

   
}
