function findHighest(a,b,c) {

    if (a > b && a > c) {
        return  a + " is the highest";
    } else if ( b > a && b > c) {
        return  b + " is the highest";
    } else if (c > a && c > b) {
        return  c + " is the highest";
    }
        
}
console.log(findHighest(90,80,70));

