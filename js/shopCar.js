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

var img = document.querySelector('.info-son img');
var title = document.querySelector('.info-all a');
var strong = document.querySelector('.shopping strong');
var b = document.querySelector('.shopping b');
var shops = document.querySelector('.shop-all');
// console.log(shops);
var de = document.querySelector('.j');
var add = document.querySelector('.a');
var text = document.querySelector('.as input');
var all_shopCars = document.querySelector('.all_shopCar input[type="checkbox"]');
var shopping = document.querySelectorAll('.shopping input[type="checkbox"]');

(function () {
  var data = localStorage.getItem('goods');
  data = JSON.parse(data);

  //  img.src=data['src'];
  title.innerHTML = data['title_info'];
  strong.innerHTML = data['price'];
  var price = data['price'];
  var price = price.slice(1)
  b.innerHTML = '￥' + parseInt(price) * parseInt(data['num']);
  text.value = data['num'];
})()

shops.addEventListener('click', function (e) {
  var shopping = document.querySelectorAll('.shopping input[type="checkbox"]');
  var target = e.target;
  // console.log(target);
  if (target.nodeName == 'INPUT') {
    // console.log(shopping);
    var flag = true;
    for (var j = 0; j < shopping.length; j++) {

      if (shopping[j].checked == false) {
        flag = false;
        break;
      }
    }
    all_shopCars.checked = flag;
  }
  if (target.nodeName == 'SPAN' && target.className == 'j') {
    var data = localStorage.getItem('goods');
    data = JSON.parse(data);
    if (parseInt(data['num']) - 1 >= 1) {
      data['num'] = parseInt(data['num']) - 1;
      text.value = data['num'];
      var price = data['price'];
      var price = price.slice(1)
      b.innerHTML = '￥' + parseInt(price) * parseInt(data['num']);
      localStorage.setItem('goods', JSON.stringify(data));
    }
  }
  if (target.nodeName == 'SPAN' && target.className == 'a') {
    var data = localStorage.getItem('goods');
    data = JSON.parse(data);
    data['num'] = parseInt(data['num']) + 1;
    text.value = data['num'];
    var price=data['price'];
    var price=price.slice(1)
    b.innerHTML='￥'+parseInt(price)* parseInt(data['num']);
    localStorage.setItem('goods', JSON.stringify(data));
  }
  if (target.nodeName == 'SPAN' && target.className == 'moveout') {
    target.parentNode.parentNode.remove();
  }
});
all_shopCars.addEventListener('click', function () {
  for (var i = 0; i < shopping.length; i++) {
    shopping[i].checked = all_shopCars.checked;
  }
})
