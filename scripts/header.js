// const nav_sub = document.querySelector('.nav_sub')
// const bg_h = document.querySelector('.bg_h')
// const nav = document.querySelector('nav')
// const header = document.querySelector('header')
// const logo = document.querySelector('header > h1 > a > img')
// const dotbogi = document.querySelector('.t_m_sub .dotbogi img')
// const lang = document.querySelector('.t_m_sub .lang img')
// const m_nav = document.querySelectorAll('.m_nav > ul >li')
// const m_nav_sub = document.querySelectorAll('.m_nav .m_sub li')

$('.nav_sub').hide()
$('.bg_h').on('mouseover',()=>{
    $('header').css('background-color','#fff')
})
$('.bg_h').on('mouseout',()=>{
    $('header').css('background-color','')
})
$('nav').on('mouseover',()=>{
    $('.nav_sub').stop(true).slideDown()
})
$('nav').on('mouseout',()=>{
    $('.nav_sub').stop(true).slideUp()
})
$('.nav_sub').on('mouseover',()=>{
    $('.nav_sub').stop(true).slideDown()
})
$('.nav_sub').on('mouseout',()=>{
    $('.nav_sub').stop(true).slideUp()
})
// 이미지 변경
$('nav').on('mouseover',function(){
    $('header > h1 > a > img').attr('src','./images/header_footer/logo_top.png')
    $('.t_m_sub .dotbogi img').attr('src','./images/flaticon/dotbogi_3.png')
    $('.t_m_sub .lang img').attr('src','./images/flaticon/language_1.png')
    })
$('nav').on(
    'mouseout',function(){
    $('header > h1 > a > img').attr('src','./images/header_footer/logo_top_b.png')
    $('.t_m_sub .dotbogi img').attr('src','./images/flaticon/dotbogi_1.png')
    $('.t_m_sub .lang img').attr('src','./images/flaticon/language_b.png')
    })
//
//햄버거

let bool = true
$('.t_m_sub .hamburger').on('click',function(){
    if(bool == true){
        $('.m_nav').stop(true).slideDown()
        bool = false
    }else
    {
        $('.m_nav').stop(true).slideUp()
        bool = true
    }
})

// 모바일