function payWithPayant() {
 var email = document.getElementById("email_input").value;
 var amount = 2000;

 /* This checks if email input is valid */
 checkEmail =
  email.length < 256 &&
  /^[^@]+@[^@]+[A-Za-z0-9]{2,}\.[^@]+[A-Za-z0-9]{2,}$/.test(email);

 // check if email is valid
 if (!checkEmail) {
  alert("Please provide a valid email");
  return;
 } else {
  var handler = Payant.invoice({
   key: "ef830c1131b65d81b4cb7137e10d0d3706412b96",
   client: {
    first_name: "Oginis this",
    last_name: "Oginis that",
    email,
    phone: "+2348012345678"
   },
   due_date: "12/30/2016",
   fee_bearer: "client",
   items: [
    {
     item: ".Com Domain Name Registration",
     description: "alberthostpital.com",
     unit_cost: amount,
     quantity: "1"
    }
   ],
   callback: function(response) {
    console.log(response);
   },
   onClose: function() {
    console.log("Window Closed.");
   }
  });

  handler.openIframe();
 }
}
