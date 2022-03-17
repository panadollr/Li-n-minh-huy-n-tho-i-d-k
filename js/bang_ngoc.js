$('#bang_ngoc_button').click(function(){
  $("#bang_ngoc").load("pages/bang_ngoc.html");
  $('#bang_ngoc')
  .modal('show');
})

$(function(){
    $( document ).tooltip();
});

function success_bang_ngoc() {
    if(nhanh_chinh_function == true && nhanh_phu_function == true){
        alert('ád')
    }
};



    $(document).on('click','#ngoc_chinh img',function(){
       new Audio('musics/bang_ngoc/pick_sound.mp4').play()
        $(this).addClass('ac').siblings().removeClass('ac');
        var id = $(this).data('id');
        anime({
            targets: '#modal_bg',
            opacity : [0.9,1],     
          });
          for(let i=0;i<ngocBoTro.length;i++){
              if(i==id){
                $('#icon_disable').attr('src',ngocBoTro[i].img)    
                $('#modal_bg').attr('src',ngocBoTro[i].background)
                disable_tat_ca_nhanh_animation()
                show_bang_ngoc_details(id)
              }
          }
    })

    var nhanh_chinh_function = false;
        $(document).on('click','#bang_ngoc_chi_tiet img',function(){
            nhanh_chinh_function = true; 
            $(this).addClass('ac2').siblings().removeClass('ac2');
            nhanh_chinh_animation()
           new Audio($(this).attr('sound-src')).play()
        })  

        var nhanh_phu_function =false;
        $(document).on('click','#bang_ngoc_nhanh_phu img',function(){
            nhanh_phu_function =true;
            $(this).addClass('ac2').siblings().removeClass('ac2');
            nhanh_phu_animation();
          new Audio('musics/bang_ngoc/nhanh_phu_pick_sound.mp4').play()
        })  


        function nhanh_phu_animation(){
            if(nhanh_chinh_function == true){
               $('#bang_ngoc_nhanh_phu #progress_stick').animate({opacity:'1'}).animate({height:'92px'},"fast")    
            setTimeout(()=>{
 $('#bang_ngoc_nhanh_phu #icon_disable img').eq(1).fadeIn('fast');
            },500)
            }
            else{
                $('#bang_ngoc_nhanh_phu #icon_disable img').eq(1).fadeIn('fast');
            }
            
        }


function show_bang_ngoc_details(id){
    const nhanh_chinh=ngocBoTro[id].nhanhchinh;
for(let i=0;i< nhanh_chinh.length;i++){
    if(nhanh_chinh.length ==3){
        $('#bang_ngoc_chi_tiet .item.nhanh_chinh').eq(3).hide()
        $('#bang_ngoc_chi_tiet .item.nhanh_chinh').css('margin-left','10px')
    }else{
        $('#bang_ngoc_chi_tiet .item.nhanh_chinh').eq(3).show()
        $('#bang_ngoc_chi_tiet .item.nhanh_chinh').css('margin-left','-10px')
    }
    $('#bang_ngoc_chi_tiet .item.nhanh_chinh').eq(i).attr('src',nhanh_chinh[i].img)
    $('#bang_ngoc_chi_tiet .item.nhanh_chinh').eq(i).attr('title',nhanh_chinh[i].name)
    $('#bang_ngoc_chi_tiet .item.nhanh_chinh').eq(i).attr('sound-src',nhanh_chinh[i].sound)
    
}
const nhanh_phu=ngocBoTro[id].nhanhphu;
for(let i=0;i< nhanh_phu.length;i++){
    $('#bang_ngoc_nhanh_phu .item.nhanh_phu').eq(i).attr('src',nhanh_phu[i].img)
    $('#bang_ngoc_nhanh_phu .item.nhanh_phu').eq(i).attr('title',nhanh_phu[i].name)
}

}

        function nhanh_chinh_animation(){
            $('#ngoc_chinh #progress_stick').animate({opacity:'1'}).animate({height:'90px'},"fast")
            setTimeout(()=>{
 $('#icon_disable img').eq(1).fadeIn('fast');
            },500)
            if( nhanh_phu_function==true){
                nhanh_phu_animation()
            }                  
        }

        function disable_tat_ca_nhanh_animation(){
            nhanh_chinh_function =false;
            nhanh_phu_function =false;
            $('#bang_ngoc #progress_stick').animate({opacity:'0'}).animate({height:'0px'},"fast")
 $('#icon_disable img').eq(1).fadeOut();
 $('#bang_ngoc img').removeClass('ac2')
 setTimeout(()=>{
 },500)    
$('#bang_ngoc_nhanh_phu #icon_disable img').eq(1).fadeOut('fast');
        }





