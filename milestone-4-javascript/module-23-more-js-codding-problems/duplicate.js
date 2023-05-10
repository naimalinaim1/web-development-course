function removeDuplicate(names) {
    const rd_names = [];
    for (let i=0; i< names.length; i++) {
        const rd_name = names[i];
        if (rd_names.includes(rd_name) === false) {
            rd_names.push(rd_name);
        }
    }
    return rd_names;
}

const names = ['naim', 'alamin', 'naim', 'ali', 'hossain', 'shoyaib', 'ali'];
const removeName = removeDuplicate(names);
console.log(removeName);