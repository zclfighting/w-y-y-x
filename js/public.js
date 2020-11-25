
//获取随机数
function getRand(min,max){
    //return Math.floor((Math.random()*(max-min+1)+min));
    return parseInt((Math.random()*(max-min+1)+min));
}

//获取随机颜色
function getColor(){
    var str="0123456789abcdef";
    var color="#";
    for(var i=0;i<6;i++){
        color += str[getRandom(0,15)]
    }
    return color;
}

//验证码
function getYZM(num){
    var yzm="";
    var rand;
    for(var i=0;i<num;i++){
        rand=getRandom(48,122);
        if(rand>=58 && rand<=64 || rand>=91 && rand <=96){
            i--;
            continue;
        }
        yzm+=String.fromCharCode(rand);
    }
    return yzm;
 }

 //获取时间
 function getDateToLocal(date){
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    if(s <= 0){
        showTime.innerHTML = "商品活动时间已结束";
        return;
    }
    //根据时间差的秒数来计算天，时，分，秒
    var hours = s / 60 / 60;
    //console.log(d);
    //hours/24:1.9791626041666666
    var d = parseInt(hours/24);
    var h = parseInt((hours/24 - d) * 24);
    var f = parseInt(((hours/24 - d) * 24 - h) * 60);
    var m = parseInt((((hours/24 - d) * 24 - h) * 60 - f) * 60);
    
    showTime.innerHTML = "距离商品活动结束还剩"+d+"天" + h + "时"+f+"分"+m+"秒";
}

//获取子节点中元素含有的个数
function getChildren(obj){
    var childList=obj.childNodes;
    var list=[];
    for(var i=0;i<childList.length;i++){
        if(childList[i].nodeType==1){
            list.push(childList[i]);
        }
    }
    return list;
}

//去掉字符串左右的空格

function myTrim(s){
    var count=0,endCount=0;
    for(var i=0;i<s.length;i++){
        if(s[i]==" "){
            count++;
        }
        else
            break;
    }
    for(var j=s.length-1;j>=0;j--){
        if(s[j]==" "){
            endCount=j;
        }else{
            endCount=j+1;
            break;
        }
    } 
    return  s.slice(count,endCount);
}
//判断一个元素是否含有一个类
function hasClass(ele,value){
   var cName=myTrim(ele.className);   
   if(cName==""){
       return false;
   }
   var cNameList = cName.split(" ");
   for(var i=0;i<cNameList.length;i++){
       if(cNameList[i]===value)
       return true;    
   }
   return false;
}

//移除一个类
function removeClass(ele,value){
    var cName=myTrim(ele.className);
    if(cName===" "){
        return ;
    }
    if(!hasClass(ele,value)){
        return;
    }
    var cNameList=cName.split(" ");
    for(var i=0;i<cNameList.length;i++){
        if(cNameList[i]===value || cNameList[i] ===""){
            cNameList.splice(i,1);
            i--;
        }
        
    }
    ele.className=cNameList.join(" ");
}

//添加一个类
function addClass(ele,value){
    var cName=myTrim(ele.className);
    if(cName==""){
        ele.className = value;
        return ;
    }
    if(hasClass(ele,value)){
        return ;
    }else{
        ele.className += " "+value;
    }
}

//获取前一个兄弟节点
function getPreviousSibling(ele){
    var eleP=ele.parentNode;
    var firstEle=getFirstChild(eleP);
    if(firstEle===ele) return null;
    var prevNode=ele.previousSibling;
    if(prevNode.nodeType != 1){
        return getPreviousSibling(prevNode);
    }
    return prevNode;
}
// console.log(getPreviousSibling(li));


//获取第一个子元素
 function getFirstChild(ele){
    return ele.firstChild;
 }

 //封装一个方法来获取url中的key
 function getSearch(key){
     var search=location.search.substring(1);
     if(search === "")
        return "";
     var searchList=search.split("&");
     var list = [];
     for(var i=0;i<searchList.length;i++){
         list=searchList[i].split("=");
         if(list[0]===key){
             return decodeURIComponent(list[1]);
         }
     }
     return "";
 }

 //兼容document.getElementByClassName() 在ie8的使用
 function getByClassName(cName){
     var eleList = document.getElementsByTagName("*");
     var newList= [];
     for(var i=0;i<eleList.length;i++){
         if(hasClass(eleList[i],cName)){
             newList.push(eleList[i]);
         }
     }
     return newList;
 }
// 兼容ie8的浏览器的阻止冒泡的函数封装
function stopProp(e){
    var e = e||event;
    !!e.stopPropagation ? e.cancelBubble=true :e.stopPropagation();
}

//阻止默认事件的兼容
function preventDefault(e){//e形参传递的是兼容后的事件对象
    //判断是否是在ie8在运行
    var e=e||event;
    /* if(!!e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    } */
    !!e.preventDefault ? e.preventDefault() : e.returnValue = false;
}

// 侦听的兼容处理
function addEvent(ele,event,callBack,flag){
    /*  if(!!ele.addEventListener){
         ele.addEventListener(event,callBack,flag);
     }else{
         ele.attachEvent("on"+event,callBack);
     } */
     !!ele.addEventListener? ele.addEventListener(event,callBack,flag) :ele.attachEvent("on"+event,callBack)
 }

 //移除DOM2级侦听事件
 function removeEvent(ele,event,callBack){
    !!ele.removeEventListener ? ele.removeEventListener(event,callBack):ele.detachEvent("on"+event,callBack);
}

//获取target 的兼容
function getTarget(e){
    var e=e||event;
    return e.target || e.srcElement;
}

//获取页面的x ,y 值
function getPage(e){
    var sLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var sTop = document.documentElement.scrollTop ||document.body.scrollTop;
    return {
        x:e.clientX + sLeft,
        y:e.clientY + sTop
    }
}   

//获取css样式的兼容
function getStyle(ele,attr){
    return ele.currentStyle　? ele.currentStyle[attr] : getComputedStyle(ele)[attr];
}

//动画执行函数
function annimation(ele,options,callBack){  //ele表示元素对象 options为对象 callBack是动画执行完了之后处理的事件
    for(var key in options){
        if(key ==="opacity"){
            var current = parseInt(getStyle(ele,key)*100);
            var target = options[key]*100
        }else if(key.indexOf("scroll")!==-1){
            var current = ele[key];
            var target = options[key];
        }else{
            var current = parseInt(getStyle(ele,key));
            var target = options[key]
        }
        options[key]={
            "current":current,
            "target":target
        }
    }
    clearInterval(ele.timer)
    ele.timer = setInterval(function(){
        for(var key in options){
            var current = options[key].current;
            var target = options[key].target;
           var  speed = (target-current)/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(Math.abs(target-current) <= Math.abs(speed)){
               if(key=="opacity"){
                   ele.style[key]=target/100;
               }else if(key.indexOf("scroll")!==-1){
                   ele[key]=target;
               }else{
                   ele.style[key]=target+"px";
               }
               delete options[key];
               for(var key in options){
                return false;
               }
                typeof callBack =="function"?callBack():"";
                clearInterval(ele.timer);
                // console.log(1)
            }else{
                options[key].current +=speed;
                if(key === "opacity"){
                    ele.style[key]=options[key].current/100;
                }else if(key.indexOf("scroll")!==-1){
                    ele[key] = options[key].current;
                }else{
                    ele.style[key] = options[key].current +'px';
                }
            }
        }
    },20)
}

//获取元素到最外层定位父级的距离
function offset(ele, bool) {  //元素对象，是否需要含有边框
    var t = 0,
        l = 0;
    var bdl = ele.clientLeft;
    var bdt = ele.clientTop;
    while (ele) {
        l += ele.offsetLeft + ele.clientLeft;
        t += ele.offsetTop + ele.clientTop;
        ele = ele.offsetParent;
    }
    return bool ? {
        "left": l,
        "top": t
    } : {
        "left": l - bdl,
        "top": t - bdt
    }
}
function isObject(obj){
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

function ajax(options){
  // data -> 'key=value&key=value'
  // 1.创建数据交互对象
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest() // 非IE5 6
  } else {
    var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
  }

  // 判断并格式化参数data
  var data = ''
  // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
  if (isObject(options.data)) {
    // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
    for (var key in options.data) {
      data += key+'='+options.data[key]+'&'
    }
    // data = 'k1=v1&k2=v2&k3=v3&'
    data = data.substring(0,data.length-1)
  }

  if (typeof options.data === 'string') {
    data = options.data
  }

  // 判断请求方式
  if (options.type.toLowerCase() === 'get') {
    var time = ''
    time = options.cache ? '' : Date.now()
    // 2.打开连接
    xhr.open(options.type,options.url+'?'+data+'&_='+time,true) // 默认true，异步
    // 3.发送请求
    xhr.send(null) // get请求传null
  }
  if (options.type.toLowerCase() === 'post') {
    // 2.打开连接
    xhr.open(options.type,options.url,true) // 默认true，异步
    // post 请不会有缓存问题

    // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")

    // 3.发送请求
    xhr.send(data) // post请求 要传递的参数在此传
  }
  
  // 4.等待请求/响应状态
  // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
  xhr.onreadystatechange = function (){
    // console.log( xhr.readyState );// 2 3 4
    if (xhr.readyState === 4) {// 请求完成
    // xhr.status 响应状态
      if (xhr.status === 200) {// OK 响应就绪
        // xhr.responseText 响应的数据
        // options.success(xhr.responseText)
        // 支持dataType配置
        if (options.dataType === 'json') {
          var json = JSON.parse(xhr.responseText)
          options.success(json)
        } else if (options.dataType === 'xml') {
          options.success(xhr.responseXML)
        } else {
          options.success(xhr.responseText)
        }
      } else {
        // console.log(xhr.status)
        options.error(xhr.status)
      }
    }
  }
}

function jsonp(options){
  // options.success 变成全局函数
  window[options.jsonpCallback] = options.success

  // 判断 options.data的数据类型
  // 如果字符串，直接赋值data变量
  // 如果是对象，转成参数序列的字符串
  var data = ''
  if (typeof options.data === 'string') {
    data = options.data
  }
  if (isObject(options.data)) {
    for (var key in options.data){
      data += key+'='+options.data[key]+'&'
    }
    data = data.substring(0,data.length-1)
  }

  // 创建 script标签
  var oScript = document.createElement('script')
  // 给src属性赋值（url+接口参数）
  oScript.src = options.url+'?'+options.jsonp+'='+options.jsonpCallback+'&'+data
  // 把script插入文档中
  document.body.appendChild(oScript)
  // script标签加载完成时，删除此标签
  oScript.onload = function (){
    document.body.removeChild(oScript)
  }
}

function $1(selector){
  return document.querySelector(selector)
}
function $2(selector){
  return document.querySelectorAll(selector)
}


function promiseAjax(options){
  return new Promise((resolve,reject)=>{
    // data -> 'key=value&key=value'
    // 1.创建数据交互对象
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest() // 非IE5 6
    } else {
      var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
    }

    // 判断并格式化参数data
    var data = ''
    // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
    if (isObject(options.data)) {
      // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
      for (var key in options.data) {
        data += key+'='+options.data[key]+'&'
      }
      // data = 'k1=v1&k2=v2&k3=v3&'
      data = data.substring(0,data.length-1)
    }

    if (typeof options.data === 'string') {
      data = options.data
    }

    // 判断请求方式
    if (options.type.toLowerCase() === 'get') {
      var time = ''
      time = options.cache ? '' : Date.now()
      // 2.打开连接
      xhr.open(options.type,options.url+'?'+data+'&_='+time,true) // 默认true，异步
      // 3.发送请求
      xhr.send(null) // get请求传null
    }
    if (options.type.toLowerCase() === 'post') {
      // 2.打开连接
      xhr.open(options.type,options.url,true) // 默认true，异步
      // post 请不会有缓存问题

      // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")

      // 3.发送请求
      xhr.send(data) // post请求 要传递的参数在此传
    }
    
    // 4.等待请求/响应状态
    // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
    xhr.onreadystatechange = function (){
      // console.log( xhr.readyState );// 2 3 4
      if (xhr.readyState === 4) {// 请求完成
      // xhr.status 响应状态
        if (xhr.status === 200) {// OK 响应就绪
          // xhr.responseText 响应的数据
          // options.success(xhr.responseText)
          // 支持dataType配置
          if (options.dataType === 'json') {
            var json = JSON.parse(xhr.responseText)
            resolve(json)
          } else if (options.dataType === 'xml') {
            resolve(xhr.responseXML)
          } else {
            resolve(xhr.responseText)
          }
        } else {
          // console.log(xhr.status)
          reject(xhr.status)
        }
      }
    }
  })
}

// 设置cookie
function setCookie(options){
  options.days = options.days || 0
  options.path = options.path || ''
  if (options.days === 0) {
    document.cookie = options.key+'='+options.val+'; path='+options.path
  } else {
    var d = new Date()
    d.setDate(d.getDate()+options.days)
    document.cookie = options.key+'='+options.val+'; expires='+d+'; path='+options.path
  }
}

// 获取cookie
function getCookie(key){
  var arr = document.cookie.split('; ')
  for (var i = 0, len = arr.length; i < len; i++){
    var arr2 = arr[i].split('=')
    if (arr2[0] === key) {
      return arr2[1]
    }
  }
  return null
}

// 删除cookie（cookie过期浏览器自动删除）
function removeCookie(key){
  setCookie({
    key: key,
    val: '123',
    days: -2
  })
}