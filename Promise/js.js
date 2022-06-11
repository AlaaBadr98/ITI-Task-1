  
// THE CUSTOMER  DATA WE USE
  var customer=[
      {email: 'Alaa@gmail.com', name:'Alaa Osama',id:'1'},
      {email: 'Osama@gmail.com',name:' Osama',id:'2'},
      {email: 'Mohamed@gmail.com', name:'Mohamed',id:'3'}
]
//  THE ORDERS DATA
var customerOrder=[
    {order: "mobile", customerId: 1, creationDate: "2022-02-02"},
    {order: "TV", customerId: 2, creationDate: "2022-02-05"},
    {order: "Ibad", customerId: 3, creationDate: "2022-02-07"}
]

// 2- PROMISE METHOD

var id = prompt("Please enter customer ID", "1");
function showData(id){
  let data=customer[id-1];
    document.getElementById("data").innerHTML ='Customer ID : '+data.id+'<br>'+'Customer Name :'+data.name+'<br>'+
                                                'Customer Email : '+data.email;
    let orderdata= customerOrder[id-1];
    document.getElementById("order").innerHTML ='Customer Order : '+orderdata.order+
                                               '<br>'+'Customer ID :'+orderdata.customerId+
                                               '<br>'+'Customer  creation Date : '+orderdata. creationDate;
    console.log(orderdata)
    console.log(data)
}
function showerror(){
  document.getElementById("data").innerHTML='The customer is not found'
  document.getElementById("order").innerHTML ='No orders for this customer'
}

let myPromise = new Promise(function(defined,undefined) {
  if ((id>0) && (id<=3) ) {
    defined(id);
  } else {
    undefined("Error");
  }
});

myPromise.then(
  function(value) {showData(value);},
  function(error) {showerror();}
);

