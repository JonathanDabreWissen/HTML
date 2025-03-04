function abc(){
    {
        a=10;
        var b = 20;
        let c = 30;

        console.log(`From abc() inside block - a: ${a}`);
        console.log(`From abc() inside block - b: ${b}`);
        console.log(`From abc() inside block - c: ${c}`);
    }
    console.log(`From abc() outside block - a: ${a}`);
    console.log(`From abc() outside block - b: ${b}`);
    console.log(`From abc() outside block - c: ${c}`);
}

abc();
console.log(`From outside abc() -a: ${a}`);
console.log(`From outside abc() -b: ${b}`);
console.log(`From outside abc() -c: ${c}`);