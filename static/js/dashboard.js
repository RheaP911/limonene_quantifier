Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Limonene Content Levels in Uploaded Images',
        align: 'center',
        style: {
            color: '#5A6A85',
            fontWeight: '500'
        }
    },
    subtitle: {
        text:
            'Starting Date: April 2024 ',
        align: 'center'
    },
    xAxis: {
        categories: ['April', 'May', 'June', 'July'],
        crosshair: true,
        accessibility: {
            description: 'Month'
        },
        color: '#5A6A85'
    },
    yAxis: {
        min: 0,
        title: {
            text: 'number of images uploaded'
        },
        color: '#5A6A85'
    },
    tooltip: {
        valueSuffix: ' images',
        color: '#5A6A85'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Low',
            data: [406292, 260000, 107000, 27500],
            color:"#5D87FF",
        },
        {
            name: 'Medium',
            data: [51086, 136000, 141000, 77000],
            color:"#FFAE1F"

        },
        {
            name: 'High',
            data: [490125, 354822, 105455, 188412],
            color:"#13DEB9"

        }
    ]
});

// Add class to the chart container
document.getElementById('container').classList.add('custom-chart');
