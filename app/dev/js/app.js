

$(document).ready(function(){
    "use strict";

    // typed effect
    var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 120,
    loop: true
    });

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 80) {
            $("header").addClass('secondary-bg-dark-blue-color');
        } else {
            if($("header").hasClass('secondary-bg-dark-blue-color')){
                $("header").removeClass('secondary-bg-dark-blue-color');
            }
        }
    });

    // Portfolio Owl Carousel
	$("#owl-portfolio-carousel").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 3,
		stopOnHover : true,
		navigation : true, // Show next and prev buttons
		pagination : false,
		navigationText: ["<i class='fa fa-arrow-circle-left wow fadeInRight' data-wow-delay='0.55s'></i>","<i class='fa fa-arrow-circle-right wow fadeInRight' data-wow-delay='0.85s'></i>"]
    });
    
    // Skill Chart
    $('#skill-chart').highcharts({
        title: {
            text: 'MY SKILLS CHART',
            style: {
                fontFamily: "'Exo 2', sans-serif",
                color: '#00909e',
                fontSize: '24px'
            }
        },
 
        xAxis: {
            labels: {
                style: {
                    fontFamily: "'Exo 2', sans-serif",
                    color: '#00909e',
                    fontSize: '14px'
                }
            },
           categories: ['Angular', 'ASP.NET MVC', 'C#', 'CSS', 'Entity Framework', 'Express','HTML', 'JavaScript', 'jQuery', 'LINQ', 'mongoDB', 'Node.js', 'React', 'SQL', 'SQL Sever', 'Web API']
        },

        yAxis: {
            title: {
                text: 'Proficiency Scale',
                style: {
                    fontFamily: "'Exo 2', sans-serif",
                    color: '#FF7A11',
                    fontSize: '16px'
                }
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemStyle: {
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#FF7A11'
             }
        },

        series: [{
            name: 'Advanced',
            color: '#00909e',
            data: [null, 8, 9, 8, 8, null,9, 8, 8, 8, null, null, null, 8, 8, 8]
        },{
            name: 'Proficient',
            color: '#FF7A11',
            data: [7, null, null, null, null, 7, null, null, null, null, 7, 7, 7,null, null, null]
        }, {
            name: 'Novice',
            data: [null, null, null, null, null, null, null, null, null, null ,null, null, null, null, null, null]
        }],

        credits: {
            enabled: false
        }
    });

    // modal
    $('.modal-open').click(function(e){
        e.preventDefault();

        var elem = $(this), 
            title = elem.find('.project-title').text(),
            link = elem.attr('href'),
            image = elem.find('.project-image').attr('src'),
            descr = elem.find('.project-description').text(),
            tools = elem.find('.project-tools').html(),
            details = elem.find('.project-details').html();
        
        $('.portfolio-modal').addClass("portfolio-modal-visible");

        $('.modal-project-title').text(title);
        $('.btn').attr('href', link);
        $('.modal-project-image').attr('src', image);
        $('.modal-project-description').text(descr);
        $('.modal-project-tools').html(tools);
        $('.modal-project-details').html(details);
    });

    $('.modal-close').click(function(e) {
        $('.portfolio-modal').removeClass("portfolio-modal-visible");
    });

});