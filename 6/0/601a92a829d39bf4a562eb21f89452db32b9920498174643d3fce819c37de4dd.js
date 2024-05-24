jQuery(document).ready(function ($) {

    var debounce = null;

    $(document).on('submit change', '.post-grid .post-grid-search.ajax form', function (e) {

        e.preventDefault();



        //var keyword = $(this).val();
        var grid_id = $(this).attr('grid_id');
        //var key = e.which;
        $('#post-grid-' + grid_id + ' .search-loading').addClass('active');

        formData = $(this).serialize();

        var postGridWrap = document.querySelector('#post-grid-' + grid_id);

        var postgridargs = postGridWrap.getAttribute("data-options");

        postgridAttsObj = JSON.parse(postgridargs);

        var view_type = postgridAttsObj.view_type;

        // console.log(grid_id);


        var is_reset = 'no';
        //if(keyword.length>3){
        //$('#post-grid-'+grid_id+' .search-icon').html('<i class="fas fa-spin fa-spinner"></i>');

        //$('.pagination').fadeOut();

        $.ajax({
            type: 'POST',
            context: this,
            url: post_grid_ajax.post_grid_ajaxurl,
            data: { "action": "post_grid_ajax_search_free", "grid_id": grid_id, "is_reset": is_reset, "formData": formData, },
            success: function (response) {

                var datas = JSON.parse(response);
                pagination = datas['pagination'];
                html = datas['html'];



                $('#post-grid-' + grid_id + ' .grid-items').html(html);
                //$('#post-grid-'+grid_id+' .search-icon').html('<i class="fas fa-search"></i>');
                $('#post-grid-' + grid_id + ' .pagination').html(pagination);
                $('#post-grid-' + grid_id + ' .search-loading').removeClass('active');

                if (view_type == "masonry") {

                    console.log(view_type);


                    var $container = $('#post-grid-' + grid_id + ' .grid-items');

                    console.log($container);


                    $container.masonry({
                        itemSelector: '.item',
                        columnWidth: '.item', //as you wish , you can use numeric
                        isAnimated: true,
                        isFitWidth: true,
                        horizontalOrder: true,
                        gutter: 20,
                        percentPosition: true,
                    });
                    $container.imagesLoaded().done(;



                }

            }
        });
        //}

    })



    // $(document).on('keyup', '.post-grid .post-grid-search.ajax .search', function (e) {

    //     e.preventDefault();
    //     clearTimeout(debounce);


    //     var keyword = $(this).val();
    //     var grid_id = $(this).attr('grid_id');
    //     var key = e.which;

    //     //console.log(key);


    //     formData = $(this).serialize();

    //     var is_reset = 'no';


    //     debounce = setTimeout(() => {

    //         $('#post-grid-' + grid_id + ' .search-loading').addClass('active');
    //         //$('.pagination').fadeOut();

    //         $.ajax({
    //             type: 'POST',
    //             context: this,
    //             url: post_grid_ajax.post_grid_ajaxurl,
    //             data: { "action": "post_grid_ajax_search_free", "grid_id": grid_id, "is_reset": is_reset, "formData": formData, },
    //             success: function (response) {

    //                 var datas = JSON.parse(response);
    //                 pagination = datas['pagination'];
    //                 html = datas['html'];

    //                 //console.log(pagination);


    //                 $('#post-grid-' + grid_id + ' .grid-items').html(html);
    //                 //$('#post-grid-'+grid_id+' .search-icon').html('<i class="fas fa-search"></i>');
    //                 $('#post-grid-' + grid_id + ' .pagination').html(pagination);
    //                 $('#post-grid-' + grid_id + ' .search-loading').removeClass('active');


    //             }
    //         });


    //     }, 1000);




    // })



    $(document).on('click', '.post-grid .paginate-ajax a.page-numbers', function (event) {
        event.preventDefault();

        $('.post-grid .paginate-ajax .page-numbers').removeClass('current');
        formData = $('.post-grid-search form').serialize();

        console.log(formData);


        $(this).addClass('current');

        var current_page = parseInt($(this).text());
        var paged = parseInt($(this).attr('paged'));
        var grid_id = parseInt($(this).parent().attr('grid-id'));

        console.log(paged);
        console.log(current_page);


        post_grid_masonry_enable = 'no';
        $.ajax(
            {
                type: 'POST',
                context: this,
                url: post_grid_ajax.post_grid_ajaxurl,
                data: { "action": "post_grid_paginate_ajax_free", "grid_id": grid_id, "current_page": current_page, "formData": formData, },
                success: function (data) {

                    var response = JSON.parse(data)
                    var data = response['html'];
                    var pagination = response['pagination'];

                    if (post_grid_masonry_enable == 'yes') {

                        var $grid = $('#post-grid-' + grid_id + ' .grid-items').masonry({});
                        $grid.masonry('destroy');
                        $grid.html(data).masonry();

                        $grid.masonry('reloadItems');
                        $grid.masonry('layout');

                        $('#post-grid-' + grid_id + ' .grid-items').masonry({ "isFitWidth": true });
                        $('#paginate-ajax-' + grid_id).html(pagination);

                    }
                    else {
                        $('#post-grid-' + grid_id + ' .grid-items').html(data);
                        $('#paginate-ajax-' + grid_id).html(pagination);

                    }


                    $("#post-grid-" + grid_id).ScrollTo({
                        duration: 1000,
                        easing: 'linear'
                    });





                }
            });

    })




});






