var login = document.querySelector('.input i');
var input1=document.querySelector('.input input[type="text"]');
// console.log(input1);
// console.log(input1);
var checkbox=document.querySelector('.input input[type="checkbox"]');
var hk=document.querySelector('.hk');
localStorage.setItem('user',12345678910);
localStorage.setItem('pass',123456);

login.addEventListener('click',function(){
  if(checkbox.checked){
    if(localStorage.getItem('user')==parseInt(input1.value)&& localStorage.getItem('pass')==parseInt(hk.value)){
      alert('登录成功');
      
      location.href='../index.html';
    }else{
      alert('手机号或者密码错了');
    }
  }else{
    alert('未勾选协议');
  }
})
