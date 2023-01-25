const stringLength = (str) => {
    let count = {};
    for(let i=0; i<str.length; i+=1){
        let character = str[i];
        if (count[character]) {
            count[character] ++
        } else {
            count[character] = 1;
        }
    }
    return count;
}