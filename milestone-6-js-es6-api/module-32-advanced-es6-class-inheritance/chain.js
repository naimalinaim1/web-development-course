const users = [
    {id: 1, name: 'abul', job: 'doctor'},
];

console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'ebul', job: 'leader'}
    ]
}

const firstJob = data.data[0].job;
console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochuket lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}

const userFloor = user.address?.stret?.second;
console.log(userFloor);

// try {
// } catch (err) {
//     console.log(err.message)
// }

console.log('end')