const makeClouser=()=>{
    let count=0;
    return function (){
        return count+=1;
    }
}

const counter=makeClouser();
console.log(counter());