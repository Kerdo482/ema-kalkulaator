function getinfo(){
  // vars
  var e = document.getElementById("jobSelect");
  var selectnr = e.options[e.selectedIndex].value;
  var test =  e.options[e.selectedIndex].innerHTML;
  var currenthrs = 0
  var currentvalue = 0
  var testMath = 0
  const statDiv = document.getElementById('root')
  const addedtotalDiv = document.getElementById('addedtotal')
  const totaldiv = document.getElementById('total')
  const historydiv = document.getElementById('history')
  
  var jsinput = document.getElementById('testinput')
      currenthrs = jsinput.value
  //fetch start
fetch('http://andmebaas.stat.ee/sdmx-json/data/PA627/' + selectnr + '.1.1+2/all?startTime=2010&endTime=2014&dimensionAtObservation=allDimensions')
    .then((response) => {
    return response.json()
  })
  .then((data) => {
    var palkNr = data.dataSets[0].observations['0:0:0:1'][0]
    console.log(data)
    statDiv.innerHTML = palkNr
    testMath = palkNr * currenthrs
    addedtotalDiv.innerHTML = testMath
    currentvalue = currentvalue + testMath
    totaldiv.innerHTML = currentvalue

    //history
    let newRow = document.createElement("div");
    newRow.classList.add("print-in");
    newRow.innerHTML = " " + test + " " + currenthrs + " tundi = " + currentvalue;
    historydiv.appendChild(newRow);
    



    });
  }


  //button
const button = document.getElementById('testbutton')
button.addEventListener("click", getinfo);

