const ulTag = document.getElementById('champs');

$(document).ready(function(){
   
   if(allChamp.length <8){
        let liTag = `<h1 style="color:white">Số lượng tướng phải lớn hơn hoặc bằng 8, hãy cập nhật tướng theo đúng yêu cầu nha đồng chí Bùi</h1> `;
        ulTag.insertAdjacentHTML("beforeend", liTag);    
    }
    else{
       for (let i = 0; i < allChamp.length; i++) {
  let liTag = `
<a id="${allChamp[i].vitri}" class="card" style="height: 120px;width: 75px;" data-name="${i}"  a-index="${i + 1}">
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


