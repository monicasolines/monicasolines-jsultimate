let i = 0;

while (i < 6) {
    i++;
    if (i===2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}

//se puede usar para for, for in, for of, y do while