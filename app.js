fetch('http://andmebaas.stat.ee/sdmx-json/data/PA634')
    .then((response) => {
    return response.json()
  })
  .then((data) => {
    const statDiv = document.getElementById('root')
    const testDiv = document.getElementById('test')
    console.log(data)


    data.structure.dimensions.series[2].values.forEach(stats => {
        let test2Div = document.createElement('option')
        test2Div.innerHTML = stats.name
        testDiv.append(test2Div)



    });
});
  // ============================