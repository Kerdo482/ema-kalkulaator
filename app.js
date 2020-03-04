
function getinfo(){
  // vars
  var e = document.getElementById("jobSelect");
  var selectnr = e.options[e.selectedIndex].value;

  //var text = e.options[e.selectedIndex].text;
  var jsinput = document.getElementById('testinput')
  currenthrs = jsinput.value
  //fetch start
fetch('http://andmebaas.stat.ee/sdmx-json/data/PA627/' + selectnr + '.1.1+2/all?startTime=2010&endTime=2014&dimensionAtObservation=allDimensions')
    .then((response) => {
    return response.json()
  })
  .then((data) => {
    const statDiv = document.getElementById('root')
    const totalDiv = document.getElementById('total')
    const palkNr = data.dataSets[0].observations['0:0:0:1'][0]
    console.log(data)
    statDiv.innerHTML = palkNr
    totalDiv.innerHTML = palkNr * currenthrs


      

    });
  }
  //button
const button = document.getElementById('testbutton')
button.addEventListener("click", getinfo);

