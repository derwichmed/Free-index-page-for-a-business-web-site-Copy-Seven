$(function (){
   nbrStep = 0;
   $('#next_step').click(function (){
       if(nbrStep < 2)
        nbrStep = nbrStep + 1;
       $('.form_wizard_header > div').eq(nbrStep - 1).removeClass('active');
       $('.form_wizard_header > div').eq(nbrStep - 1).addClass('disable');
       
       $('.form_wizard_header > div').eq(nbrStep).removeClass('disable');
       $('.form_wizard_header > div').eq(nbrStep).addClass('active');
       
       $('.form_item').eq(nbrStep - 1).hide();
       $('.form_item').eq(nbrStep).fadeIn(1400);
       
       $('.form_nav_item').eq(nbrStep - 1).hide();
       $('.form_nav_item').eq(nbrStep).fadeIn(1500);
   });
   
   $('#pre_step').click(function (){
       if(nbrStep > 0)
        nbrStep = nbrStep - 1;
    
       $('.form_wizard_header > div').eq(nbrStep + 1).removeClass('active');
       $('.form_wizard_header > div').eq(nbrStep + 1).addClass('disable');
       
       $('.form_wizard_header > div').eq(nbrStep).removeClass('disable');
       $('.form_wizard_header > div').eq(nbrStep).addClass('active');
       
       $('.form_item').eq(nbrStep + 1).hide();
       $('.form_item').eq(nbrStep).fadeIn(1400);
       
       $('.form_nav_item').eq(nbrStep + 1).hide();
       $('.form_nav_item').eq(nbrStep).fadeIn(1500);
   });
   
});