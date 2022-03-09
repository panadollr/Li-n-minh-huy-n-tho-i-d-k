

const success_fm_sound = document.getElementById('success_fm_sound');
var find_m_btn_click = new Audio('musics/find_m_btn_click.mp3');
const ulTag = document.getElementById('champs');
var nhaccuong = new Audio('musics/Messenger.mp3');

$(document).ready(function(){
   if(allChamp.length <8){
        let liTag = `<h1 style="color:white">Số lượng tướng phải lớn hơn hoặc bằng 8, hãy cập nhật tướng theo đúng yêu cầu nha đồng chí Bùi</h1> `;
        ulTag.insertAdjacentHTML("beforeend", liTag);    
    }
    else{
       for (let i = 0; i < allChamp.length; i++) {
  let liTag = `
<a id="${allChamp[i].vitri}" class="card" style="height: 120px;width: 80px;" data-name="${i}"  a-index="${i + 1}">
    <div class="image">
      <img src="${allChamp[i].img}" style="height: 80px;">
    </div>
    <div class="content"  style="color: white;font-size: 1.6ch;margin-top: 0px;">
    ${allChamp[i].name}</div>
  </a>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);
}  
    }

    
   
});




function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
 const hehe= setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (++timer < 0) {
          timer = duration;
      }
  }, 1000);

setTimeout(()=>{
   var t = 5;
  var timeout= setInterval(()=>{
t--;
$('#time2').text(t);
  if(t== -3){
      $('#success_fm')
.modal('hide');
clearInterval(timeout);
clearInterval(hehe);
$('#progress_right').removeClass("trans-right");
$('#progress_left').removeClass("trans-left");
$('#findmatch').removeClass("disabled");
  $('#time').text('0:00');
  }
   },1000);


$('#success_fm')
.modal('show') .modal('setting', 'closable', false);
clearInterval(hehe);
success_fm_sound.play();
$('#progress_right').addClass("trans-right");
   setTimeout(()=>{
$('#progress_left').addClass("trans-left");
},3000)
},2000)
}



$('#findmatch').click(function(){
  $('#time_findmatch').transition('fade down');
  $('#find_m_btn_text').text('ĐANG TÌM TRẬN');
  $('#findmatch').css('background','url(https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/play-button-disabled.png)').css('pointer-events','none').css('filter','brightness(0.6)');;
$('#flag_user').addClass('flag_user_anima');
$('#flag_ava_user').css('transform','translateY(-15px)');
find_m_btn_click.play();
setTimeout(()=>{
$('#chalenge_border').transition('fade ');
},100);
  var fiveMinutes = 60 * 0,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
})


$('#video_fm_success').on('ended',function(){
      $('#video_fm_success').css('display','none');
      $('#select_champ').css({display:'block'});
$('#leagues .item')
  .transition({
    animation : 'fade right',
    duration  : 800,
    interval  : 550
  });

      setTimeout(()=>{
$('#all').transition('fade up');
$('#enemys').transition('fade left');
setTimeout(()=>{
  $('#border_champ_bg_pick').fadeIn('fast') },100)
new Audio('musics/show_champs.mp3').play();
setTimeout(()=>{
    nhaccuong.play();
    $('#bui_item').addClass('selecting_item_animation');
    nhaccuong.onended=function(){
nhaccuong.play();
    }
},500);

},4000);
})


$('#accept_match').click(function(){
  $('#index').css('display','none');
    $('#main_sidebar').removeClass('visible');
    $('#map_fm_success').css('transform','scale(1.7)').css('top', '-20px');;
    $('#accept_match').css('background',"url(https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/button-accept-disabled.png").css('pointer-events','none');
$('#accept_m_btn_text').css('filter',"brightness(0.6)");
    $('#find_m_status').text("ĐÃ CHẤP NHẬN !");
      $('#progress_right').css('filter','brightness(4)').css('animation-play-state','paused;');
      $('#progress_left').css('filter','brightness(4)').css('animation-play-state','paused;');
      $('#accept_m').trigger('play');
        setTimeout(()=>{
 $('#success_fm').modal('hide');
      },700);
      setTimeout(() => {
        $('#video_fm_success').css('display','block').trigger('play');;
      }, 700);

})


















