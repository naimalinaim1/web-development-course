const fetchData = async () => {
  const url = "data/getAllBillionaire.json";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
// load billionaires
const loadBillionaires =async () => {
  const data = await fetchData();
  displayBillionaires(data);
};

// display billionaires
const displayBillionaires = (data) => {
  const totalWorth = {
    worth: 0,
  };
  const billionaires = getMultipleRandom(data, 3);
  const container = document.getElementById("tbody");
  const totalEl = document.getElementById("total-worth");
  billionaires.forEach((billionaire) => {
    const { person, countryOfCitizenship, industries, rank, finalWorth } =
      billionaire;
    totalWorth.worth += finalWorth;
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td onclick="showDetails(${rank});" class="hover:text-sky-400 font-semibold cursor-pointer"><label for="my-modal-3" class="flex items-center gap-3"><span>${person.name}</span> <img src="images/eye-solid.svg" class="h-[15px]"></label></td>
            <td>${countryOfCitizenship}</td>
            <td>${industries[0]}</td>
            <td>${rank}</td>
            <td>${finalWorth.toFixed(2)}</td>
        `;
    container.appendChild(tr);
  });
  totalEl.innerText = totalWorth.worth.toFixed(2);
};

// load random user
const getMultipleRandom = (items, num) => {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
// show user details
const showDetails = async (rank) => {
  console.log(rank);
 const data = await fetchData();
  const personInfo = data.find(item => item.rank === rank)
  displayShowDetails(personInfo);
};

//  display details
const displayShowDetails = (personInfo) => {
  const modalCon = document.getElementById('modal-container');
  modalCon.innerHTML = '';
  const { person, abouts, squareImage, imageExists} = personInfo;
  console.log(personInfo)
  modalCon.innerHTML = `
    <p class="text-4xl font-bold text-center">${person.name}</p>
    <p class="text-center">${abouts}</p>
    
  `;
  const isImg = imageExists ?  `<img src="${squareImage}">`: 'No Image found';
  modalCon.innerHTML += isImg;
}


// call load billionaires
loadBillionaires();
