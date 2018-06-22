function Form() {
  
  var email = document.forms["myForm"]["email"].value;
  var no = document.forms["myForm"]["telephone"].value;
  var gender = null;
  var interests = [];
  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('messageCheckbox');
  var contact = document.getElementById("mySelect").value;

 
  //radio
  if(document.getElementById("male").checked === true)
    {
     gender = 'male'
    }else
  {
    gender = 'female'
  }
  
  //checkbox
  for(var i=0; inputElements[i]; ++i)
  {
    if(inputElements[i].checked)
      {
        checkedValue = inputElements[i].id;
        interests.push(checkedValue);
      }
  }

  var details = {
    Email:email,
    Number:no,
    Interests:interests,
    Contact:contact,
    Gender:gender
  }

  console.log(details);

}

