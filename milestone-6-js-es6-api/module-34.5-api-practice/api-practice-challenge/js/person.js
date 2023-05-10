const displayPerson = (personData) => {
  const message = personData.message;
  const persons = personData.result;
  const p1Name = persons[0]?.name?.common;
  const p1Age = persons[0]?.age;
  const p1Address = persons[0]?.address?.street;
  const p1House = persons[0]?.address?.house;
  const p2Name = persons[1]?.name?.common;
  const p2Age = persons[1]?.age;
  const p2Address = persons[1]?.address?.street;
  const p2House = persons[1]?.address?.house;

  document.getElementById('message').innerText = message;
  document.getElementById('p1-name').innerText = p1Name;
  document.getElementById('p1-age').innerText = p1Age;
  document.getElementById('p1-address').innerText = p1Address;
  document.getElementById('p1-house').innerText = p1House;

  document.getElementById('p2-name').innerText = p2Name;
  document.getElementById('p2-age').innerText = p2Age;
  document.getElementById('p2-address').innerText = p2Address;
  document.getElementById('p2-house').innerText = p2House;
};

displayPerson(person);
