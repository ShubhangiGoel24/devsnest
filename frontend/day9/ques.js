  
let name1 = {
    firstname:"Shubhangi",
    lastname: "Goel",
    printname: function (hometown) {
        console.log(this.firstname,this.lastname,"from",hometown);
    }
}
name1.printname("Ghaziabad");
let name2={
    firstname:"Amira",
    lastname:"Goel"
}
//use of call function
name1.printname.call(name2,"Ghaziabad");
//use of apply function
name1.printname.apply(name2,["Ghaziabad"]);
//use of bind
let printmyname=name1.printname.bind(name2,"Ghaziabad");
printmyname();