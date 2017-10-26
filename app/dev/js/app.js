

$(document).ready(function(){
    "use strict";

/*
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

    
    */
    /****************************************************
     Skill Charts
     ****************************************************/

    //Skill chart for core
    var idCore = 'skill-chart-core';
    var titleCore = 'My Skills Chart - Core';
    var categoriesCore = ['C#', 'CSS', 'HTML', 'Java', 'JavaScript','C++', 'Python', 'SQL'];
    var advancedDataCore = [9, 8, 8, 8, 8, null,null, null];
    var proficientDataCore = [null, null, null, null, null,6,  6, 7];
    var noviceDataCore = [null, null, null, null, null, null, null, null];
    skillChart(idCore, titleCore, categoriesCore, advancedDataCore, proficientDataCore, noviceDataCore);

    //Skill chart for frameworks and libraries
    var idLib = 'skill-chart-lib';
    var titleLib = 'My Skills Chart - Frameworks and Libaries';
    var categoriesLib = ['Angular', 'ASP.NET MVC', 'ASP.NET Web API', 'Bootstrap', 'Entity Framework', 'Foundation','jQuery','Express',  'Knockout.js','Node.js', 'React'];
    var advancedDataLib = [8, 9, 8, 8, 8, 8, 8, null, null,null,null];
    var proficientDataLib = [null, null, null, null, null,null, null, 7, 7, 7, 6];
    var noviceDataLib = [null, null, null, null, null, null,null, null, null,null,null];
    skillChart(idLib, titleLib, categoriesLib, advancedDataLib, proficientDataLib, noviceDataLib);

    //Skill chart function
    function skillChart(id, text, categories,advancedData, proficientData, noviceData) {

        $('#' + id).highcharts({
            title: {
                text: text,
                style: {
                    fontFamily: "'Exo 2', sans-serif",
                    color: '#8aaad9',
                    fontSize: '22px'
                }
            },
     
            xAxis: {
                labels: {
                    style: {
                        fontFamily: "'Exo 2', sans-serif",
                        color: '#8aaad9',
                        fontSize: '16px'
                    }
                },
               categories: categories
            },
    
            yAxis: {
                title: {
                    text: 'Proficiency Scale',
                    style: {
                        fontFamily: "'Exo 2', sans-serif",
                        color: '#8aaad9',
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
                    color: '#8aaad9'
                 }
            },
    
            series: [{
                name: 'Advanced',
                color: '#00B233',
                data: advancedData
            },{
                name: 'Proficient',
                color: '#05FF8C',
                data: proficientData
            }, {
                name: 'Novice',
                data: noviceData
            }],
    
            credits: {
                enabled: false
            }
        });
    }
   

    /****************************************************
     Works Carousel
    ****************************************************/
    
	$("#owl-works-carousel").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 3,
		stopOnHover : true,
		navigation : true, // Show next and prev buttons
		pagination : false,
		navigationText: ["<i class='ion-arrow-left-a wow fadeInRight' data-wow-delay='0.55s'></i>","<i class='ion-arrow-right-a wow fadeInRight' data-wow-delay='0.85s'></i>"]
    });

    /****************************************************
     Works Details - Modal
    ****************************************************/
    $('.modal-open').click(function(e){
        e.preventDefault();

        var elem = $(this), 
            title = elem.find('.project-title').text(),
            
            websiteLink = elem.attr('href'),
            repositoryLink = elem.data("repository"),
            descr = elem.find('.project-description').text(),
            tools = elem.find('.project-tools').html(),
            details = elem.find('.project-details').html(),
            slides = elem.data('images').split(','),
            slidesHtml = '';

        for(var i = 0; i < slides.length; i++) {
            slidesHtml = slidesHtml + '<img src=' + slides[i] + ' class="modal-project-image" width="500" alt="">';
        }

        console.log(slidesHtml);
          
        $('.portfolio-modal').addClass("portfolio-modal-visible");

        $('.modal-project-title').text(title);
        $('.btn-full').attr('href', websiteLink);
        $('.btn-ghost').attr('href', repositoryLink);
        $('.cycle2-slide-show').html(slidesHtml);
        $('.modal-project-description').text(descr);
        $('.modal-project-tools').html(tools);
        $('.modal-project-details').html(details);

        $('.cycle2-slide-show').cycle();
    });

    $('.modal-close').click(function(e) {
        $('.portfolio-modal').removeClass("portfolio-modal-visible");
    });

});