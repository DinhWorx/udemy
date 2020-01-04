jQuery(document).ready(function($){
    $("#toggle-mobile-nav").click(function(){
        $("#page").toggleClass("mobile-nav-opened");
        // wenn klasse m-n-o nicht existiert, erstelle sie, wenn nicht , lösche sie//
    });
// unter console kann man sehen worauf geklickt wurde target//
    $("#page").click(function(e){
        var target=e.target;
        // console.log(e);
        if ($(target).hasClass("navbar-toggler")){
            return; //gib nix zurück//
        };
        if ($(target).parent().hasClass("navbar-toggler")){
            return; 
        };
        $("#page").removeClass("mobile-nav-opened");
    });
})