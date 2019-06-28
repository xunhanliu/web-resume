(function () {

    function drawTimeLine() {
        $('#time-line').children().remove();
        var data=[{index:0,time:'2013',timeInterval:'2013.9-2017.6',title:'Harbin Engineering University',subtitle:'Microelectronics Science and Engineering',mess:''},
            {index:1,time:'2017',timeInterval:'2017.9-',title:'Tianjin University',subtitle:'software engineering',mess:''}]
        // var width=600,height=300;
        var width=$('#time-line').width();
        var height=$('#time-line').height();

        var padding=20;
        var innerWidth=width-padding*2;
        var innerHeight=height-padding*2;
        var x = d3.scaleLinear()
            .domain(d3.range(data.length))
            .range([innerWidth/data.length/2, innerWidth-innerWidth/data.length/2]);
        var draw=d3.select('#time-line').attr({width:width,height:height}).append('g').attr('transform','translate('+padding+','+padding+')')
        draw.append('rect').attr({x:0,y:0,width:innerWidth,height:20,rx:10,ry:10})
        var g=draw.selectAll('.circle_g').data(data).enter().append('g').attr('class','circle_g');
        g.append('circle').attr({'cx':d=>x(d.index),cy:10,r:10});
        g.append('circle').attr({'cx':d=>x(d.index),cy:10,r:8}).attr('class','second-circle');
        g.append('text').attr({'x':d=>x(d.index),y:-5}).text(d=>d.time);
        g.append('text').attr({'x':d=>x(d.index),y:40}).text(d=>d.timeInterval);
        g.append('text').attr({'x':d=>x(d.index),y:60}).text(d=>d.title);
        g.append('text').attr({'x':d=>x(d.index),y:80}).text(d=>d.subtitle);
    }
    drawTimeLine();


    window.addEventListener('resize',function () {
        drawTimeLine();
    });
})();


