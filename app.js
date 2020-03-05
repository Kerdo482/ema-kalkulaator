// vars
const e = document.getElementById("jobSelect");

let currenthrs = 0
let currentvalue = 0
let mathcalc = 0
let nightmultipl = 1
const statDiv = document.getElementById('root')
const addedtotalDiv = document.getElementById('addedtotal')
const totaldiv = document.getElementById('total')
const historydiv = document.getElementById('history')
const jsinput = document.getElementById('testinput')
const checkBox = document.getElementById("myCheck");


function myFunction() {
  if (checkBox.checked == true){
    nightmultipl = 1.5;
  } else {
    nightmultipl = 1;
  }
}


function getinfo(){
  let selectnr = e.options[e.selectedIndex].value;
  let jobname =  e.options[e.selectedIndex].innerHTML;
  currenthrs = jsinput.value
  //fetch start
  fetch('http://andmebaas.stat.ee/sdmx-json/data/PA627/' + selectnr + '.1.1+2/all?startTime=2010&endTime=2014&dimensionAtObservation=allDimensions')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // ühe tunni palk
    var palkNr = data.dataSets[0].observations['0:0:0:1'][0]
    statDiv.innerHTML = (palkNr * 1.645).toFixed(2)
    // palk * tunnid
    mathcalc = (palkNr * currenthrs) * nightmultipl * 1.645
    // total
    currentvalue = currentvalue + mathcalc
    totaldiv.innerHTML = currentvalue.toFixed(2)

    //history
    let newRow = document.createElement("div");
    newRow.classList.add("print-in");
    if (checkBox.checked == true){
      newRow.innerHTML = " " + jobname + " " + currenthrs + " öötundi = " + mathcalc.toFixed(2);
    } else {
      newRow.innerHTML = " " + jobname + " " + currenthrs + " tundi = " + mathcalc.toFixed(2);
    }
    
    historydiv.appendChild(newRow);


  });
}


  //button
  const button = document.getElementById('button')
  button.addEventListener("click", getinfo);


