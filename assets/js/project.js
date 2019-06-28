(function () {
    d3.select('#project-img')
    .on("mouseover", function (d) {
        const tooltip = d3.select('.tooltip');
        tooltip.html('')
            .style("left", (d3.event.pageX + 5) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        tooltip.append('span').text('This is a high-dimensional data analysis system, which can automatically analyze the dimension relationship of high-dimensional data. The front-end has rich interactive functions which can update the display content according to the user\'s operation. Because some machine learning algorithms are involved, python with abundant packages is selected as the background for data analysis and processing.');
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);

    })
        .on("mouseout", function (d) {
            const tooltip = d3.select('.tooltip');
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on('mousemove',function (d) {
            d3.select('.tooltip')
                .style("left", (d3.event.pageX + 5) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
})();