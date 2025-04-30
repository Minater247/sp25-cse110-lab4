for (const name in statistics) {
    let value = statistics[name];
    if (name[0] == 'r' || value % 2 == 1) {
        console.log(value);
    } 
}