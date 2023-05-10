function fncName(name, age, gender) {
    console.log('My name is:', name);
    console.log('My age is:', age);
    console.log('My gender is:', gender);
    return name;
    return age;
    return gender;
}
// const fncReturn = fncName('naim', 18, 'male');
// console.log(fncReturn)



const mnuObj = {
    id: 115,
    name: 'Naim ali',
    firstName: 'Naim',
    lastName: 'ali',
    age: 18,
    gender: 'Male'
}

// console.log(mnuObj);
// console.log(mnuObj.id)
// console.log(mnuObj.name)
// console.log(mnuObj.age)

// console.log(mnuObj['id'])
// console.log(mnuObj['name'])
// console.log(mnuObj['age'])

const id = 'id';
// console.log(mnuObj[id]);

const objPro = Object.keys(mnuObj)
// console.log(objPro)

const objVal = Object.values(mnuObj)
// console.log(objVal)

for (let i = 0; i < objPro.length; i++) {
    const ele = objPro[i]
    // console.log(mnuObj[ele]);
}





