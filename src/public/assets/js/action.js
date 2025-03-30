var menu=0;
function slidemenu(){
    $("#menu").slideToggle();
    if(menu==0)
    {
        $("#men").hide(100);
        $("#can").show(100);
        menu=1;
    }
    else{
        $("#men").show(100);
        $("#can").hide(100);
        menu=0;
    }

}
function slidesearch(){
    $("#search").slideToggle();
}