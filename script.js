let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);

    const data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("male").value,
        Phonenumber: document.getElementById("Phonenumber").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <div class="NameContainer">${data.name}</div>
      <a href="LetsGrowMore.org">${data.email}</a><br>
      <div class="genderContainer">${data.gender}</a>
      <div class="Phonenumber">${data.Phonenumber}</div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);

    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})