  
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

// 1- CALLBACK METHOD
function callOrder(orderid) {
    let data= customerOrder[orderid-1];
    document.getElementById("order").innerHTML ='Customer Order : '+data.order+'<br>'+'Customer ID :'+data.customerId+'<br>'+
    'Customer  creation Date : '+data. creationDate;
    console.log(data)
  }


  function callCustomerData(id, myCallback) {
    let data=customer[id-1];
    document.getElementById("data").innerHTML ='Customer ID : '+data.id+'<br>'+'Customer Name :'+data.name+'<br>'+
                                                'Customer Email : '+data.email;
    console.log(data)
    myCallback(id);
  }

  let id = prompt("Please enter customer ID", "1");
  if ((id>0) && (id<=3) ) {
    callCustomerData(id, callOrder)
  } else {
    document.getElementById("data").innerHTML='The customer is not found'
    document.getElementById("order").innerHTML ='No orders for this customer'
  }
 



  
  
  
  