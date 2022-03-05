 const main_bg =document.getElementById('main_bg');
  
//LOCK_CHAMP_BUTTON_ANIMATION
  function enable_lock_champ_btn(){
    $('#lock_champ').css('background',"url('https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/button-accept-default.png')").css('pointer-events','auto').css('filter','brightness(1.5)');
  }
  
  function animation_select_champ(id){
       auto_select_champ_bot(id);
      $(main_bg).css('background',"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ),url('"+allChamp[id].img+"')");
      $('#lock_champ').data('huhu', id).css('cursor','pointer'); 
      enable_lock_champ_btn();
     document.getElementById('champ_img_bui').src =allChamp[id].img;
     new Audio('musics/pick_champ.mp3').play();
}



(function() {
  $(function() {
    var toggle;
    return toggle = new Toggle('#champs');
  });

  this.Toggle = (function() {
    class Toggle {
      constructor(toggleClass) {
        this.el = $(toggleClass);
        this.tabs = this.el.find(".card");
        this.bind();
      }

      show(index) {
        var activePanel, activeTab;
        //update tabs
        this.tabs.removeClass('blue');
        this.tabs.css( "border", "unset" );
        this.tabs.css( "transform", "scale(1)" );
        activeTab = this.tabs.get(index);
        $(activeTab).addClass('blue');
        $(activeTab).css('border',"1px solid #2185d0").css('filter',"brightness(1.1)").css('transform','scale(1.1)');
        var id =  $(activeTab).data('name');
          for (let i = 0; i < allChamp.length; i++) {
if(id == i) {
  animation_select_champ(id)
}
else if(id==4){
       $(main_bg).css('background',"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ),url('"+allChamp[4].img+"')");
      $('#lock_champ').data('huhu', 4);
     document.getElementById('champ_img_bui').src =allChamp[4].img;
}

}       
      }

      bind() {
        return this.tabs.unbind('click').bind('click', (e) => {
          return this.show($(e.currentTarget).index());
        });
      }

    };

    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;


    return Toggle;

  }).call(this);

}).call(this);


      $('#lock_champ').click(function() 
    {
      var huhu = $(this).data('huhu');
           for (let i = 0; i < allChamp.length; i++) {
      if(huhu ==i){
          lockchamp_success(huhu);
}}
    });

      function disable_lock_champ_btn(){
        $('#lock_champ').css('backgroundImage',"url('https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/button-accept-disabled.png')").css('pointer-events','none').css('filter',"brightness(0.6)");
      }

var lock_champ_success_sound = new Audio('musics/lock_champ_success.mp3');

 function lockchamp_success(huhu){
      auto_lock_champ(huhu);
 $(main_bg).css('background',"url('"+allChamp[huhu].img_lock+"')");
    disable_lock_champ_btn();
    document.getElementById('video_champ').src=allChamp[huhu].video;
    $('#status_champ_select').text(allChamp[huhu].name);
    lock_champ_success_sound.play();
    $('#champs').fadeOut('fast')
    $('#main_bg').css('overflow-y','hidden');
    setTimeout(()=>{
      $("#main_bg").animate({ scrollTop: 0 }, "fast");
},300);


    setTimeout(()=>{
  $('#video_champ').fadeIn('fast').trigger('play');
    $('#video_champ').on('ended',function(){
       $(this).fadeOut('fast');
 reset_lock_champ();
    })
    },1000);

   }




//AUTO_SELECT_CHAMP_BOT
function auto_select_champ_bot(id){
  if(id <(allChamp.length/2)){
    setTimeout(()=>{
 $('#champ_img_banhtetchien').attr('src',allChamp[id+1].img);
    },100);
    setTimeout(()=>{
$('#champ_img_cuongtinh').attr('src',allChamp[id+2].img);
    },200);
    setTimeout(()=>{  
$('#champ_img_sacana').attr('src',allChamp[id+3].img);
    },300);
    setTimeout(()=>{
$('#champ_img_lindanguyen').attr('src',allChamp[id+4].img);
    },400);
  } 
else if(id >=(allChamp.length/2)){
  setTimeout(()=>{
    $('#champ_img_banhtetchien').attr('src',allChamp[id-1].img);
       },100);
       setTimeout(()=>{
   $('#champ_img_cuongtinh').attr('src',allChamp[id-2].img);
       },200);
       setTimeout(()=>{  
   $('#champ_img_sacana').attr('src',allChamp[id-3].img);
       },300);
       setTimeout(()=>{
   $('#champ_img_lindanguyen').attr('src',allChamp[id-4].img);
       },400);
}
         
}

function pick_champ_success_animation(){
   $(main_bg).addClass('pick_champ_success_animate').css('box-shadow','none');
     nhaccuong.pause();
      $('#bui_item').removeClass('selecting_item_animation');
}

function disable_pick_champ_success_animation(){
  $('#enemys .img').removeClass('pick_champ_success_animate');
   $('#leagues .img').removeClass('pick_champ_success_animate');
   main_bg.classList.remove('pick_champ_success_animate');
    $('#bui_item').addClass('selecting_item_animation');
}

document.getElementById('lock_champ').addEventListener("click", () => {
    pick_champ_success_animation();
});


function auto_lock_champ(huhu){
   $('#enemys p').text('SẴN SÀNG');
 $('#all span').text('SẴN SÀNG');

 if(huhu <(allChamp.length/2)){
  $('#leagues .p1').text(allChamp[huhu+1].name);
  $('#leagues .p2').text(allChamp[huhu+2].name);
      $('#leagues .p4').text(allChamp[huhu+3].name);
        $('#leagues .p5').text(allChamp[huhu+4].name);
} 
else if(huhu >=(allChamp.length/2)){
  $('#leagues .p1').text(allChamp[huhu-1].name);
  $('#leagues .p2').text(allChamp[huhu-2].name);
      $('#leagues .p4').text(allChamp[huhu-3].name);
        $('#leagues .p5').text(allChamp[huhu-4].name);
}

        
}


function reset_lock_champ() {
    disable_pick_champ_success_animation();
    $('#all span').text('CHỌN TƯỚNG !');
        //clearInterval(time_ready_out);
  $('#leagues p').text("Đang chọn...");
 $(main_bg).css('background',"transparent").css('boxShadow',"inset 0px 0px 30px 30px rgba(0, 0, 0, 0.4)");
  $('#champs').fadeIn('fast')
  $('#main_bg').css('overflow-y','scroll');
     nhaccuong.play();
}


$( "#search_champs" ).keyup(function() {
  var dInput = $(this).val().toLowerCase();
  $(".card").filter(function() {
    $(this).toggle( $(this).text().toLowerCase().indexOf(dInput) > -1 )
  })
});

$(document).on('click','#position_menu a',function(){
  $(this).addClass('active').siblings().removeClass('active');
  var data_posi_menu =$(this).data('position');
  $(".card").filter(function() {
     return  $(this).attr('id') == data_posi_menu
    }).show('normal')
    $(".card").filter(function() {
      return  $(this).attr('id') != data_posi_menu
     }).hide('normal')
})

$('#all_lane').click(function(){
    $(this).addClass('active')
    $('.card').show('normal')
    $('#position_menu a').removeClass('active')
})