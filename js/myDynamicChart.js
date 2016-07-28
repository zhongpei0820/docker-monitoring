/**
 * Created by zhongpei on 16/7/18.
 */
function changeChart(myChart) {
    if (myChart.config.type == "bar") {
        var newdata = [parseInt(30 + Math.random() * 10), parseInt(50 + Math.random() * 10), parseInt(60 + Math.random() * 10), parseInt(70 + Math.random() * 10)];
        myChart.data.datasets[0].backgroundColor = getColors(newdata, "backgroundColor");
        myChart.data.datasets[0].borderColor = getColors(newdata, "borderColor");
        myChart.data.datasets[0].hoverBackgroundColor = getColors(newdata, "hoverBackgroundColor");
        myChart.data.datasets[0].hoverBorderColor = getColors(newdata, "hoverBorderColor");
        myChart.data.datasets[0].data = newdata;
        myChart.update(5000, false);
    } else if (myChart.config.type == "line") {
        var newdata = 10 + Math.random() * 10;
        myLineChart.data.datasets[0].data.shift();
        myLineChart.data.datasets[0].data.push(newdata);
        myLineChart.update(0, false);
    }
}
