$(function () {

    
  
    $('.comment__box').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg xmlns="http://www.w3.org/2000/svg" width="21.706" height="41.719" viewBox="0 0 21.706 41.719"><path fill="none" d="M2.045 20.86L21.458 1.445c.33-.33.33-.867 0-1.198-.33-.33-.867-.33-1.197 0L.25 20.26c-.33.33-.33.868 0 1.198L20.26 41.47c.165.166.383.25.6.25s.434-.084.6-.25c.33-.33.33-.866 0-1.197L2.044 20.86z"/></svg></button> ',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg xmlns="http://www.w3.org/2000/svg" width="21.706" height="41.719" viewBox="0 0 21.706 41.719"><path fill="none" d="M19.66 20.86L.25 1.445c-.33-.33-.33-.867 0-1.198.33-.33.867-.33 1.197 0L21.458 20.26c.33.33.33.867 0 1.197L1.445 41.47c-.164.166-.382.25-.6.25s-.433-.084-.598-.25c-.33-.33-.33-.866 0-1.197L19.66 20.86z"/></svg></button>',
        infinite: true,
        
    });


    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    });


   