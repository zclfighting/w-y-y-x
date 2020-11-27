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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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

var tab = document.getElementsByClassName('tab_img')[0];
var box1 = document.getElementsByClassName('box11')[0];
var mask = document.querySelector('.mask');
var box2 = document.querySelector('.box2');
var bigger = document.querySelector('.bigger-img');
console.log(box1);
tab.addEventListener('click', function (e) {
  var target = e.target || e.srcElement;
  if (e.target.nodeName === 'IMG') {
    box1.children[0].src = e.target.src;
    bigger.src = e.target.src;
  }
});
box1.addEventListener('mousemove', function (e) {
  var ml = e.pageX - offset(box1).left - mask.clientWidth / 2;
  var mt = e.pageY - offset(box1).top - mask.clientWidth / 2;
  // console.log(ml, mt);
  ml = ml > 0 ? ((box1.clientWidth - mask.clientWidth) <= ml ? (box1.clientWidth - mask.clientWidth) : ml) : 0;
  mt = mt > 0 ? ((box1.clientHeight - mask.clientHeight) <= mt ? (box1.clientHeight - mask.clientHeight) : mt) : 0;
  mask.style.left = ml + 'px';
  mask.style.top = mt + 'px';

  var bl = ml / (box1.clientWidth - mask.clientWidth);
  var bt = mt / (box1.clientHeight - mask.clientHeight);

  bigger.style.left = - bl * (bigger.clientWidth - box2.clientWidth) + "px";
  bigger.style.top = - bt * (bigger.clientHeight - box2.clientHeight) + 'px';
});
box1.addEventListener('mouseenter', function (e) {
  box2.style.display = 'block';
  mask.style.display = 'block';
  mask.style.zIndex = 999999;
});
box1.addEventListener('mouseleave', function (e) {
  box2.style.display = 'none';
  mask.style.display = 'none';
});

var as = document.querySelector('.rule_list');
as.addEventListener('click', function (e) {
  var target = e.target;
  for (var i = 0; i < as.children.length; i++) {
    as.children[i].style.border = '#999999';
    for (var j = 0; j < as.children[i].children.length; j++) {
      as.children[i].children[j].style.borderColor = "#999999";
    }
  }
  e.target.style.borderColor = " red";
},true);


var  little=document.querySelector('.little');
var  add=document.querySelector('.add');
little.addEventListener('click',function(){
  var  num=document.querySelector('.dec input');
  var text=num.value;
  if(text==1){
    num.value=1;
  }else
    num.value=parseInt(text)-1;
});
add.addEventListener('click',function(){
  var  num=document.querySelector('.dec input');
  var text=num.value;
    num.value=parseInt(text)+1;
});





var buying=document.querySelector('.buying');
buying.addEventListener('click',function(){
  alert('没做');
})
var reject=document.querySelector('.reject');
reject.addEventListener('click',function(){
  alert('也没做');
})

var car = document.querySelector('.addCar');
// console.log(car);
var title_info=document.querySelector('.title_info');
var box11=document.querySelector('.box11 img');
var price=document.querySelector('.price');
var num=document.querySelector('.num input');
car.addEventListener('click',function(e){
  
   if(!localStorage.getItem('goods')){
     var data={};
    //  data['img']='img/fdj.webp.jpg';
     data['price']=price.innerText;
     data['title_info']=title_info.innerText;
     data['num']=num.value;
     var datas=JSON.stringify(data);
    //  console.log(datas);
    localStorage.setItem('goods',datas);
   }else if(localStorage.getItem('goods')){
      var data=localStorage.getItem('goods');
      data=JSON.parse(data);
      data['num']=parseInt(data['num'])+parseInt(num.value);
      var datas=JSON.stringify(data);
      localStorage.setItem('goods',datas);
   }
   alert('加入购物车');
})