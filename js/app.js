$(function() {

    var $pageDom = $('#page-content-wrapper');
    var $listItems = $('.sidebar-nav li');

    $listItems.click(function(e) {
        var currentDom = $(e.currentTarget);
        var pageName = currentDom.data('page');
        $listItems.removeClass('active');
        currentDom.addClass('active');
        $('.row').addClass('hide')
        $('.'+pageName+'-content').removeClass('hide');
    });

    $('.portfolio-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        rows:2
    });

    $(".blog-slider").slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="'+thumb+'"></a>';
        },
    });

});