const paginateMe = (currList, setDividedList, setBtns) => {
    let groups = parseInt(currList.length / 3);
    if (currList.length % 3 > 0) {groups ++}
    const template = [...currList]
    const newList = []
    for (let i = 0; i < groups; i++) {
        const pageList = [];
        for (let j = 0; j < 3; j++) {
            if (template.length > 0) {
                const newEl = template.shift();
                pageList.push(newEl)
            }
        }
        newList.push(pageList)
    }
    setDividedList(newList)
    const arr =[]
    for (let i = 1; i <=groups; i++) {arr.push(i)}
    setBtns(arr)
}

export {paginateMe}