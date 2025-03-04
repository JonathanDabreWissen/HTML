let s1 = "Wissen"

let s2 = "Technology";

var promise = new Promise(
    function(resolved, rejected){
        if((s1+s2) === "WissenTechnology" ){
            resolved(s1+s2);
        }
        else{
            rejected();
        }
    }
)

promise
    .then(
        (val)=>{
            console.log("Best place to work");
            console.log(`Got: ${val}`);
            return val;
        },
        ()=>{
            console.log("There is some spelling mistake");
            throw new Error("Something is missing in the spelling");
        }
    )
    .then(
        (val)=>{
            console.log("Best place to work 2");
            console.log(`Got: ${val}`);
        },
        ()=>{
            console.log("There is some spelling mistake");
            throw new Error("Something is missing in the spelling");
        }
    )
    .catch(
        ()=>{
            console.log("Error handling done here....");
        }
    )