$(function() {

    var $pageDom = $('#page-content-wrapper');
    var $listItems = $('.sidebar-nav li');


    function loadPortfolio() {
        $('.portfolio-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            rows:2
        });
    }

    function loadBlog() {
        $(".blog-slider").slick({
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            customPaging : function(slider, i) {
                debugger;
                var thumb = $(slider.$slides[i]).find('img').attr('src');
                return '<a><img src="'+thumb+'" width="20px"></a>';
            },
        });
    }

    $listItems.click(function(e) {
        var currentDom = $(e.currentTarget);
        var pageName = currentDom.data('page');
        $listItems.removeClass('active');
        currentDom.addClass('active');
        $('.row').addClass('hide')
        $('.'+pageName+'-content').removeClass('hide');

        if(pageName === 'portfolio') {
            loadPortfolio();
        }

         if(pageName === 'blog') {
            loadBlog();
        }
    });



});