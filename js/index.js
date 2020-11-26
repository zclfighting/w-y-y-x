var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 水平切换选项
  loop: true, // 循环模式选项

  // autoplay:true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  // 如果需要分页器
  

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
var mySwiper = new Swiper('.swiper-container1', {
  direction: 'horizontal', // 水平切换选项
  loop: true, // 循环模式选项

  // autoplay:true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  // slidesPerView: 3,
  // centeredSlides: true,
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
//导航栏吸顶
var list = document.querySelector('.list');
var list_ul = document.querySelectorAll('.list_ul');
console.log(list_ul);
window.onscroll = function (e) {
  var h = document.documentElement.scrollTop;
  var left = document.querySelector('.left');
  var right = document.querySelector('.right');
  if (h >= 156) {
    list.style.paddingTop = '10px';
    list.style.paddingBottom = '8px';
    list.style.top = 0 + 'px';
    list.style.position = 'fixed';
    list.style.zIndex = '999999';
    list.style.borderBottom = '1px solid black';
    for (var i = 0; i < list_ul.length; i++) {
      list_ul[i].style.marginTop = '10px';
    }
  } else {
    list.style.paddingTop = '0';
    list.style.paddingBottom = '0px';
    list.style.position = 'relative';
    list.style.backgroundColor = '#fff';
    list.style.borderBottom = 'none';
    // list_ul.style.marginTop='0px';
    for (var i = 0; i < list_ul.length; i++) {
      list_ul[i].style.marginTop = '0px'
    }
  }
  if (h >= 525) {
    left.style.position = 'fixed';
    left.style.zIndex = '999999';
    left.style.top = '10px';
  } else {
    left.style.position = 'absolute';
    left.style.top = '525px';
  }
  if (h >= 525) {
    right.style.position = 'fixed';
    right.style.zIndex = '99';
    right.style.top = '10px';
  } else {
    right.style.position = 'absolute';
    right.style.top = '525px';
  }
   

}






//请求数据
var xhr;
window.XMLHttpRequest ? xhr = new XMLHttpRequest() : xhr = new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', '../json/wy_header.json' + '?' + "&_=" + Date.now(), true);
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      success(json);
    }
  } else {
    console.log(xhr.status);
  }
}
function success(data) {
  console.log(data);
  //// 导航栏渲染数据
  // list_ul;
  // var dd=document.createElement('dd');
  // dd.innerHTML=item.subCateGroupList[index].name;
/*   for(var i =0;i<list_ul.length;i++){
    console.log(data.data.cateList);
    var sp = document.createDocumentFragment();
    data.data.cateList.forEach(function (item, index) {
       var all_list=item.subCateGroupList ;
       for(var j=0;j<all_list.length;j++){
         list_ul[i].innerHTML = ' <li><dl><dd>'+all_list[j].name+'</dd></dl></li>';
         for(var k=0;k<all_list[j].categoryList.length;k++){
            var dt=document.createElement('dt');  
            dt.innerText=all_list[j].categoryList[k].name;
            var img=new Image();
            img.src=all_list[j].categoryList[k].bannerUrl;
            dt.appendChild(img);
            // dt.innerHTML= "<dt><img src="+all_list[j].categoryList[k].bannerUrl +" alt=''>"+all_list[j].categoryList[k].name+"</dt>";
            sp.appendChild(dt);
         }
         list_ul[i].children[0].children[0].appendChild(sp);
         console.log(list_ul);
       }
    })
  }*/

} 