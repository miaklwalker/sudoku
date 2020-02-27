export default function normalize(x:number){
    let i : number;
    let end:number;
    x <= 2 ? i = 0 :
        (x > 2 && x < 6) ? i = 3 :
            i = 6;
    end = i + 3;
    return [i,end];
}