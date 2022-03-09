

function showSkin(huhu){
  const skin = allChamp[huhu].skins;
  for(let i=0;i<skin.length;i++){
    let html =`<a a-index="${i+1}"  style="width:150px;height:100px;"><video style="width:100%;height:100%;object-fit:cover;  " src="${skin[i].video}"></video></a>`
    document.getElementById('skins').insertAdjacentHTML("beforeend", html);
  }
setTimeout(()=>{
  $('#skin_name').css('display','block');
  $('#skins ').transition('fade up')
},500)
autoLoadSkin(huhu)
}

function hideSkin(){
  $('#skins').html("");
  $('#video_champ').fadeOut('fast').trigger('pause');
}


function autoLoadSkin(huhu){
  const skin = allChamp[huhu].skins;
  let videoIndex = 1;
  $('.scrollmenu a').eq(videoIndex-1).addClass('active_video').siblings().removeClass('active_video');
  $('#video_champ').attr('src',skin[videoIndex-1].video).fadeIn('fast').trigger('play');
  $('#skin_name').text(skin[videoIndex-1].name)
  $('#video_champ').on('ended',function(){
    videoIndex++; 
  videoIndex > skin.length ?  videoIndex = 1 :  videoIndex =  videoIndex;
  $('.scrollmenu a').eq(videoIndex-1).addClass('active_video').siblings().removeClass('active_video');
  $('#video_champ').attr('src',skin[videoIndex-1].video).trigger('play');
  $('#skin_name').text(skin[videoIndex-1].name)
  $(".scrollmenu a")[videoIndex-1].scrollIntoView({
    behavior: "smooth",
    block: "end"
  });
  $( ".active_video" ).scroll()
  })

  $('.scrollmenu a').click(function(){
    let getAIndex = $(this).attr('a-index');
    videoIndex = getAIndex;
    $('#video_champ').attr('src',skin[videoIndex-1].video).fadeIn('fast').trigger('play');
    $('#skin_name').text(skin[videoIndex-1].name)
    $('.scrollmenu a').eq(videoIndex-1).addClass('active_video').siblings().removeClass('active_video');
  })
}



