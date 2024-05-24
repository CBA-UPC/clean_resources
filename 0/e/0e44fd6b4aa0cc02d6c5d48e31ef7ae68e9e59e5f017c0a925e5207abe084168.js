/* ------------main----------------------------main------------------------main---------------------main-------------------- */
							


							$(function() {
								$(".slider").slick({
									slidesToShow: 4,
									arrows: true,
									infinite: false,
									speed: 300,
									responsive: [
										{
											breakpoint: 769,
											settings: {
												slidesToShow: 1,
												infinite: false,
												variableWidth: true
											}
										}
									]
								});
							
								$(".events__filter-btn").on('click', function(el){
									var filter = $(this).data('filter');

									$(".slider").slick('slickUnfilter');

									if(filter == 'events-new'){
										$(".slider").slick('slickFilter','.events-new');
									}
									else if(filter == 'events-meeting'){
										$(".slider").slick('slickFilter','.events-meeting');
									}
									else if(filter == 'all'){
									
										$(".slider").slick('slickUnfilter');
									}
								})
							});


							var btns = document.getElementsByClassName("events__filter-btn");
							for (var i = 0; i < btns.length; i++) {
								btns[i].addEventListener("click", function() {
									var current = document.getElementsByClassName(" active-btn ");
									current[0].className = current[0].className.replace(" active-btn ", "");
									this.className += " active-btn ";
								});
							}


			//projects
						//project-filter
							const windowInnerWidth = window.innerWidth;
							if (windowInnerWidth < 769) {
								var project_initial_items_desktop = 3;
							} else {
								var project_initial_items_desktop = 6;
							}
							var project_next_items_desktop = 2;
							var $projects__items_desktop = $('#projects__items-desktop').isotope({
								itemSelector: '.projects__item-desktop',
								layoutMode: 'masonry',
								stamp: '.projects__item-desktop--static'
							});

							$('.projects__filter-btns-desktop').on('click', 'button', function () {
								var project_desktop_value = $(this).attr('data-filter');
								$projects__items_desktop.isotope({filter: project_desktop_value});
								project_updateFilterCounts_desktop();
							});
							function project_updateFilterCounts_desktop() {
								var itemElems_project_desktop = $projects__items_desktop.isotope('getFilteredItemElements');
								var count_items_project_desktop = $(itemElems_project_desktop).length;
							
								if (count_items_project_desktop > project_initial_items_desktop) {
									$('#projects__btn-plus-desktop').show();
								}
								else {
									$('#projects__btn-plus-desktop').hide();
								}
								if ($('.projects__item-desktop').hasClass('visible_item')) {
									$('.projects__item-desktop').removeClass('visible_item');
								}
								var index = 0;
									$(itemElems_project_desktop).each(function () {
									if (index >= project_initial_items_desktop) {
										$(this).addClass('visible_item');
									}
									index++;
								});
								$projects__items_desktop.isotope('layout');
							}
							$('.projects__filter-btns-desktop').each(;

							function project_showNextItems_desktop(pagination) {
								var itemsMax_project_desktop = $('.visible_item').length;
								var itemsCount = 0;
								$('.visible_item').each(function () {
									if (itemsCount < pagination) {
										$(this).removeClass('visible_item');
										itemsCount++;
									}
								});
								if (itemsCount >= itemsMax_project_desktop) {
									$('#projects__btn-plus-desktop').hide();
								}
								$projects__items_desktop.isotope('layout');
							}
							function project_hideItems_desktop(pagination) {
								var itemsMax_project_desktop = $('.projects__item-desktop').length;
								var itemsCount = 0;
								$('.projects__item-desktop').each(function () {
									if (itemsCount >= pagination) {
										$(this).addClass('visible_item');
									}
									itemsCount++;
								});
								if (itemsCount < itemsMax_project_desktop || project_initial_items_desktop >= itemsMax_project_desktop) {
									$('#projects__btn-plus-desktop').hide();
								}
								$projects__items_desktop.isotope('layout');
							}
							$('#projects__btn-plus-desktop').on('click', ;
							project_hideItems_desktop(project_initial_items_desktop);


			//history
						//history-swiper
							var swiper = new Swiper(".main-history__swiper", {
								slidesPerView: 1,
								spaceBetween: 80,
								navigation: {
									prevEl: ".main-history__swiper-btn-prev",
									nextEl: ".main-history__swiper-btn-next",
								},
								breakpoints: {
									769: {
										slidesPerView: 3,
										spaceBetween: 40,
									},
									1200: {
										slidesPerView: 4,
										spaceBetween: 80,
									},
								},
							});


			//spec-projects
						//spec-projects-swiper
							var swiper = new Swiper(".spec-projects__swiper-main", {
								slidesPerView: 'auto',
								autoHeight: true,
								navigation: {
									prevEl: ".spec-projects__swiper-btn-prev",
									nextEl: ".spec-projects__swiper-btn-next",
								},
								breakpoints: {
									769: {
										slidesPerView: 3
									}
								}
							});







