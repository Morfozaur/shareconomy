const paginateMe = (currList, setCurrPage) => {
    let groups = parseInt(currList.length / 3);
    if (currList.length % 3 > 0) {groups ++}
    const starter = [...currList]
    const newList = []
    for (let i = 0; i < groups; i++) {
        const pageList = [];
        for (let j = 0; j < 3; j++) {
            if (starter.length > 0) {
                const newEl = starter.shift();
                pageList.push(newEl)
            }
        }
        newList.push(pageList)
    }
    if (newList.length > 0){
        console.log(newList.length, 'test')
        console.log('tak')
        setCurrPage(newList[0])
    }
}

export {paginateMe}