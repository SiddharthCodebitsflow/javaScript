function test(){
    console.log(this.name,this.contact);
}
const testData={name:"siddharth",contact:29350};
test.call(testData);

const testFun=()=>{
    console.log(this)
}
testFun();