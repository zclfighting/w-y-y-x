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

      // console.log(json)
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
  var datas=data.data.cateList;
  for(var i=0;i<list_ul.length;i++){
    datas.forEach(function(item,index){
      item.subCateGroupList.forEach(function(ite,index){
          var li=document.createElement('li');
          var dl=document.createElement('dl');
          var dd=document.createElement('dd');
          dd.innerHTML=ite.name;
          dl.appendChild(dd);
          ite.categoryList.forEach(function(it,ins){
              var dt=document.createElement('dt');
              var img=new Image();
              img.src=it.bannerUrl;
              dt.innerHTML=it.name;
              dt.appendChild(img);
              dl.appendChild(dt);
          });
          li.appendChild(dl);
          list_ul[i].appendChild(li);  
      })
   })
  }
} 
