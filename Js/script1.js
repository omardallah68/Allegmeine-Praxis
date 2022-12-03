let termin = document.getElementById("termin");
let name0 = document.getElementById("name");
let lastname = document.getElementById("lastname");
let geburtsdatum = document.getElementById("geburtsdatum");
let straße = document.getElementById("straße");
let hausnummer = document.getElementById("hausnummer");
let postleitzahl = document.getElementById("postleitzahl");
let ort = document.getElementById("ort");
let telefonnummer = document.getElementById("telefonnummer");
let email = document.getElementById("email");
let messege = document.getElementById("messege");
let submit = document.getElementById("submit");


if(localStorage.person != null){
    data = JSON.parse(localStorage.person)
}else{
    data = [];
};

function buchen(){
    
    let newData ={
        termin : termin.value,
        name : name0.value,
        lastname : lastname.value,
        geburtsdatum : geburtsdatum.value,
        straße : straße.value,
        hausnummer : hausnummer.value,
        postleitzahl : postleitzahl.value,
        ort : ort.value,
        telefonnummer : telefonnummer.value,
        email : lastname.value,
    }; 

    data.push(newData);
    localStorage.setItem('person', JSON.stringify(data))
    console.log(data);
    messege.innerHTML = `<p>Der Termin am ${termin.value} ist für ${name.value} ${lastname.value} reserviert</p><p>Falls Problem gibt werden wir mit Ihnen kontaktieren, entweder eine E-Mail an ${email.value} schicken, oder Sie an ${telefonnummer.value} anrufen</p>`
}
