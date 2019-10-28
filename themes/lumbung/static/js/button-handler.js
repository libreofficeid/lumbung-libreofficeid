$(function(){
  $('.btn-filter').on('click',function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});
})