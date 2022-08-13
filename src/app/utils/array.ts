export const objectToArray = (obj: any) => {
    const arr: Array<any> = []
    if (obj instanceof Object) {
        for (let i in obj) {
            arr.push({
                key: i,
                value: obj[i]
            })
        }
    }
    return arr
}