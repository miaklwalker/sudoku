export default function nestedClone (arr:(string|number)[][]){
    return arr.map(ar=>ar.map(a=>a));
}