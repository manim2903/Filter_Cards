let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

console.log(arr.length)

let given_profession=document.getElementById("profession");
let entered_name=document.getElementById("entered_name")
let entered_profession=document.getElementById("entered_proession")
let entered_age=document.getElementById("entered_age")

function filter_by_profession(arr, given_profession){
    if(given_profession==null){
        alert("select a proession before clicking the button")
    }
    let filter_array=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].profession=given_profession){
            filter_array.push(arr[i])
        }
    }
    console.log(filter_array);
}
filter_by_profession(arr,given_profession);

function add_user(arr){
    let obj={
        id:arr.length+1,
        name:entered_name,
        age:entered_age,
        profession:entered_profession
    }
    arr.push(obj)
    entered_age,entered_name,entered_profession="";
}