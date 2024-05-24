$(document).ready(function() {

    var slickOptions = {
            slide: 'div',
            accessibility: false,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            classDots: 'slick-dots carousel-dots'
        },
        slickTeamMember = {
            dots: true,
            fade: false,
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            focusOnSelect: true,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }

            }, {

                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '24px'
                }

            }]
        }

    function formatCityName(city) {
        var str = city.replace('-', ' ').split(' ');

         if (city.indexOf('london') !== -1 || city.indexOf('bristol') !== -1) {
            str = str.join('').toLowerCase().replace('uk', '').split(' ');
          }

        return str.map(.filter(.join(' ');

    }

    function jobSnippet(obj) {
        var title = $('<h5/>').html(obj.title),
            description = $('<p/>').html(obj.description),
            link = $('<a/>').html('Learn more').attr('href', obj.link),
            div = $('<div/>').addClass('view-job_item').attr('style', 'height:300px;min-width:500px'),
            col = $('<div/>').addClass('col-xl-12').attr('style', 'display:inline-block');

        div.append(title).append(description).append(link);
        col.append(div);

        return col;
    }

    function teamSnippet(obj) {
        var member = {
                country: obj.country.value,
                image: {
                    url: obj.image_url.value,
                    alt: obj.image_alt.value
                },
                name: obj.name.value,
                job: obj.job.value,
                linkedin_url: obj.linkedin_url.value
            },
            parentDiv = $('<div/>').addClass('item-' + member.country),
            itemDiv = $('<div/>').addClass('our-people_item'),
            image = $('<img/>').attr('src', member.image.url).attr('alt', member.image.alt),
            name = $('<h4/>').html(member.name),
            job = $('<p/>').html(member.job),
            linked = $('<a target="_blank" href="' + member.linkedin_url + '"><i class="fa fa-linkedin" aria-hidden="true"/></a>');

        if (member.image.url) {
            itemDiv.append(image);
        }

        itemDiv.append(name);
        itemDiv.append(job);

        if (member.linkedin_url) {
            itemDiv.append(linked);
        }

        itemDiv.appendTo(parentDiv);

        return parentDiv;
    }

    
    function printJobs(arr, loc) {
        var rowArr = [];
        var row = [];

        arr.forEach(function(i, ind) {
            if (filterByLoc(i, loc)) {
                row.push(jobSnippet({
                    title: i.title.value,
                    city: i.city.value,
                    description: i.description.value,
                    link: i.link.value
                }));
            }

            if (row.length === 4 || arr.length - 1 === ind) {
                rowArr.push($('<div/>').addClass('row view-g').append(row));
                row.length = 0;
            }
        });

        return rowArr;
    }

    function printTeamMembers(arr, loc) {
        var teamArr = [];

        arr.forEach(function(i) {
            if (i.country.value === loc) {
                teamArr.push(teamSnippet(i));
            }
        });

        return teamArr;
    }

    /// Open company details popup
    if(window.location.href.indexOf('#companyDetails') != -1) {
        $('#companyDetails').modal('show');
    }

    // Blog top carousel

    $('#topCarousel').slick(slickOptions);

    $('#topCarousel').slick('slickRemove', 'slickCurrentSlide');

    // Our team in

    var team = Array.prototype.slice.call(document.getElementsByClassName('our-team-forms'));
    var teamLocs = [];
    var countryTeamSelect = $('#team-in-select');

    team.forEach(function(i) {
        var ctry = i.country.value;
        var locsStr = teamLocs.map(function(i) {
            return i.value
        });

        if (locsStr.indexOf(ctry) === -1) {
            teamLocs.push({
                value: ctry,
                formatValue: formatCityName(i.country.getAttribute('formatValue'))
            });
        }
    });

    countryTeamSelect.append(teamLocs.map(function(ctry) {
        return $('<option value="' + ctry.value + '">' + ctry.formatValue + '</option>');
    }));


    $('#sliderTeam').slick('unslick').empty().append(printTeamMembers(team, countryTeamSelect.val())).slick(slickTeamMember);

    countryTeamSelect.change(function(e) {
        $('#sliderTeam').slick('unslick').empty().append(printTeamMembers(team, e.target.value)).slick(slickTeamMember);
    });

    // Jobs carousel

    var jobs = [];
    var jobsForms = Array.prototype.slice.call(document.getElementsByClassName('jobs-hidden-forms'));
    var locs = [];
    var citySelect = $('#job-city-select');

    jobsForms.forEach(function(i) {
        var strLocs = locs.map(;
        if (strLocs.indexOf(i.city.value) === -1) {
            locs.push({
                value: i.city.value,
                formatValue: formatCityName(i.city.getAttribute('formatValue'))
            })
        }
    });

    locs = locs.map(function(i, ind) {
        return $('<option value="' + i.value + '">' + i.formatValue + '</option>');
    });

    citySelect.append(locs);

    $('.city-london').append(printJobs(jobsForms, citySelect.val())).slick(slickOptions);

    citySelect.on('change', function(e) {
        $('.city-london').slick('unslick').empty().append(printJobs(jobsForms, e.target.value)).slick(slickOptions);
    });
});
