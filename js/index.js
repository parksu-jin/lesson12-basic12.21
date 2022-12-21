import $ from 'jquery'

$(function(){
  // 연결됐는지 확인하기
  // $('body').css('background-color','red')

  let windowW = $(window).width()
  if(windowW >= 1160){
    nav()
    submenu()
  }else if(windowW < 1159 && windowW >= 980){
    nav()
    submenu()
  }else if(windowW < 979 && windowW >= 580){
    tNav()
  }else if(windowW < 579){
    tNav()
  }

  // 공동부분


  // reset부분

})
// web용
function nav(){
  $('nav li>a').on('click',function(e){
    const navA = $(this).attr('href')
    const aPos = $(navA).offset().top
    const headerHeight = $('header').innerHeight()
    $('html,body').animate({scrollTop:aPos-headerHeight},800)
    return false
  })
}
// tablet, mobile용
function tNav(){
  let navW = $('nav').width()
  // .btn click
  $('header .btn').on('click',function(e){
    $(this).hide()
    $('nav').animate({left:0},400)
   })


  // scroll
$('nav li>a').on('click',function(e){
  const navA = $(this).attr('href')
    const aPos = $(navA).offset().top
    const headerHeight = $('header').innerHeight()
    $('html,body').animate({scrollTop:aPos-headerHeight},800)
$('nav').css('left','-'+navW+'px')
$('header .btn').show()

    return false
})

  // .close
$('nav .close').on('click',function(e){
  $('nav').css('left','-'+navW+'px')
})
}

function submenu(){
  
  // html 정리
  // jquery 연결
}



console.log('welcome')
// DOM object
const h4 = document.querySelector('#modal h4')
const img = document.querySelector('#modal figure>img')
const day = document.querySelector('#modal dl .year')
const pro = document.querySelector('#modal dl .program')
const url = document.querySelector('#modal dl .link>a')
const content = document.querySelector('#modal dl .text')

// event-> 작업 -> click -> figure, figure>img, #midal>.close
const open = document.querySelectorAll('#all>figure')
// console.log(open)
const close = document.querySelector('#modal>.close')
// console.log(close)
const modal = document.querySelector('#modal')


// 객체를 생성자 함수로 만들기
function Modal(title,pic,year,program,href,text){
  this.title = title
  this.pic = pic
  this.year = year
  this.program = program
  this.href = href
  this.text = text
}
// console.log(img)

// 매서드 만들기
Modal.prototype.action = function(){
h4.innerHTML = this.title;
img.setAttribute('src',this.pic);
day.innerHTML = this.year;
pro.innerHTML = this.program;
url.setAttribute('href', this.href);
url.innerHTML = this.href;
content.innerHTML = this.text;
}

// 인스턴스
let myModal = [
  new Modal('title1','./images/pic01.png','2022','프로그램1','http://aaa1.com','내용1'),
  new Modal('title2','./images/pic02.png','2021','프로그램2','http://aaa2.com','내용2'),
  new Modal('title3','./images/pic03.png','2023','프로그램3','http://aaa3.com','내용3'),
  new Modal('title4','./images/pic04.png','2024','프로그램4','http://aaa4.com','내용4'),
  new Modal('title5','./images/pic05.png','2025','프로그램5','http://aaa5.com','내용5'),
  new Modal('title6','./images/pic06.png','2026','프로그램6','http://aaa6.com','내용6')
]


// open.onclick -> 첫번째만 되니까 이렇게 쓰면 안됨
open.forEach(function(item,index){
  item.onclick = function(){
    modal.style.display = 'block'
    myModal[index].action()
  }
})
close.onclick = function(){
  modal.style.display = 'none'
}