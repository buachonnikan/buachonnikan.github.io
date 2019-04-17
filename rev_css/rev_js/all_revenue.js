var colors = ['#aed6f1', '#F0E68C', '#EEE8AA', '#A1EFDD', '#C9E988'];
$( '#all_rev' ).highcharts({
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} (% of GDP)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {
    text: 'Revenue (% of GDP)'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: [
      'Argentina',
      'Brazil',
      'Canada',
      'Jamaica',
      'United States'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    //max: 15,
    title: {
      text: '(% of GDP)'
    }
  },
  
    plotOptions: {
        pie: {
            colors: colors
        },
        column: {
          pointPadding: 0.3,
          borderWidth: 0
      }
    },
    colors:colors,
    series: [{
        type: 'column',
        name: 'Revenue (% of GDP)',
        data: [21.35900542, 28.92703399, 17.44214952, 28.38634709, 18.82326952] 
    }]
  });

