const exploreObj = {
    id: 101,
    name: 'explore object',
    feature: {
        isSingle: true,
        brand: 'eggal'
    },
    friends: ['rohim', 'korim', 'solim', 'jolim'],
    act: function () {
        console.log('explore object');
    }
}

console.log(exploreObj.feature);
exploreObj.act();


function num (num1, num2) {
    console.log(num1, num2);
    console.log(arguments)
    console.log(arguments[5])
}

num(23, 46, 25, 38, 64, 77);