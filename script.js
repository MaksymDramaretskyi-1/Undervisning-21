console.log('Hello!');

//Asynkron funksjon 
// 
async function fetchData(){
  const fruitBowl = [
    { fruit: "Apple"},
     { vagetable: "Potato"},
    { berry:"Strawberry"}
  ];

  console.log(fruitBowl);
  return fruitBowl;
};

console.log("Wating for data");

async function reciveData() {
  try {
    const data =  await fetchData()
    console.log(data);
    const response = data[0].fruit;
    console.log(response);
  } catch {
      console.log("Noe gikk galt...");
  }
};

reciveData();

//
//

async function displayData (){
  try {
        const data = [
        { fruit: "Apple"},
        { vagetable: "Potato"},
        { berry:"Strawberry"}
        ]; // Data
        const response = data[1].vagetable;// Response
        console.log(response);
  } catch {
      console.log("Noe gikk galt...")
  }
};

//
//

async function fetchJson () {
  const data = await fetch("data.json");
  console.log(data);
  return data;
};



async function displayJson() {
  const response = await fetchJson();
  console.log(response)

  const fruitBowl =  await response.json();
  console.log(fruitBowl);
  // Loop gjennom innhold: for loop, forEach
  // HTML som tar i mot: ul, table, div
  // Retunere fruitBowl: fredig laget html, generere html i JS, template string med innerHTML

  const displayJson = document.getElementById("displayJson");
  
  fruitBowl.forEach( fruit  => {// For å kun få ut et li-element 
    if(fruit.fruit) {
        const li = document.createElement('li');
        li.textContent = fruit.fruit; // Resultatet dynes. Mulig nettleser ikke oppdaterte seg. 
        displayJson.appendChild(li);
    }
  });
};

displayJson();