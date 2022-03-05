

          $('#play_button_sidebar_defaut').hover(function(){
            $(this).attr("src","videos/play_button_sidebar_hover.mp4"); 
         
            $(this).trigger('play'); 
          },function(){
            $(this).attr("src","videos/play_button_sidebar_defaut.mp4");  
          }
          )


$('#play_btn').hover(function(){
   $(this).attr('src','https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/play-button-hover.png');
},function() {
    $( this ).attr('src','https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/play-button-default.png');
  }
);




$('#tft-html').click(function(){
      $('#tft_modal')
      .modal('show');
      $('#tft_modal video').trigger('play');
 $('#tft_modal video').on('ended',function(){
      $('#tft_modal')
      .modal('hide');
      setTimeout(()=>{
 $('body')
      .toast({
        message: 'Chế độ sẽ ra mắt trong năm 2023',
        showProgress: 'bottom',
        classProgress: 'red'
      })
    ;
      },1000);
     
 })
     
     
      })


      $('#special_present_show').click(function(){
            new Audio("musics/special_present_show.mp3" ).play();
            $('#special_present_modal')
            .modal('show')
            ;
            setTimeout(()=>{
                  $('#special_present').transition('fade up');
            },500)
        });

        $('#open_special_present').click(function(){
            new Audio("musics/special_present_open.mp3" ).play();
            $('#special_present').attr('src','videos/special-present_open.mp4');
            $('#special_present').on('ended',function(){
                  new Audio("musics/special_present_opened.mp3" ).play();
                  $('#special_present').transition('fade');
                  setTimeout(()=>{
 $('#special_present_opened').transition('fade up');
 $('#special_present_opened').css('filter','brightness(5) ');
 setTimeout(()=>{
      $('#special_present_opened').css('filter','brightness(1)');
 },200);
 setTimeout(()=>{
$('#special_present_opened video').trigger('play');
 },1000)
                  },500);
                  $('#open_special_present').css('display','none');
            })
        });

        $('#special_present_opened video').on('ended',function(){
            $('#special_present_modall')
            .modal('hide') ;
           
            setTimeout(()=>{
                  location.reload();
            },500)
           
        });


        $(document).ready(function() {
            var movehover = $(".card").hover( hoverVideo, hideVideo );
            function hoverVideo(e) {
                 $('video', this).get(0).play(1000);
            }
            function hideVideo(e) {
                $('video', this).get(0).pause();
            }
       });


//REPONSIVE 
/*$(document).ready(function(){
      $(window).resize(function(){
 
      var width = $(window).width();
      if (width <= 480){
          $('.sidebar').sidebar('hide');
      }
      else{
            $('.sidebar').sidebar('show');
      }
  });
})*/

