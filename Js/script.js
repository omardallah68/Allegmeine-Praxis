// var initSqlJs = require('sql.js')
let times = document.querySelector('#times')
let timeDay = document.querySelector('#timeDay')
let day = document.querySelector('#day')
 
let time = function(){
    times.innerHTML = `
    <h3 id="seitenkopf">Termine</h3>
    <div class="vormittag">
    <p id="time-day" class="time1-day" onclick="timeDay1()">8:00</p>
    <p id="time-day" class="time1-day" onclick="timeDay1()">9:00</p>
    <p id="time-day" class="time1-day" onclick="timeDay1()">10:00</p>
    <p id="time-day" class="time1-day" onclick="timeDay1()">11:00</p>
    </div>
    <div class="nachmittag">
    <p id="time-day" class="time1-day" onclick="timeDay1()">13:00</p>
    <p id="time-day" class="time1-day" onclick="timeDay1()">14:00</p>
    <p id="time-day" class="time1-day" onclick="timeDay1()">15:00</p>
    <p id="time-day" class="time1-day" onclick="timeDay1()">16:00</p>
    </div>`
    times.style.transition= "0.4s ease-in-out";
    console.log(JSON.stringify(this.day.name))
};

let timeDay1 = function(){
    timeDay.innerHTML= `<form id="contact-form" method="POST" class="bock">
    <div class="erst">
    <label for="termin">Termin</label>
    <input id="termin" name="termin" type="datetime-local" placeholder="Termin">
    <label  for="vorname">Vorname</label>
    <input id="vorname" name="vorname" type="text" placeholder="Vorname">
    <label for="nachname">Nachname</label>
    <input id="nachname" name="nachname" type="text" placeholder="Nachname">
    <!--</div>-->
    
    <label for="geburtsdatum">Geburtsdatum</label>
    <input id="geburtsdatum" name="geburtsdatum" type="date" placeholder="Geburtsdatum">
    <label for="straße">Straße</label>
    <input id="straße" name="straße" type="text" placeholder="Straße">
    </div><div class="zwei">
    <label for="hausnummer">Hausnummer</label>
    <input id="hausnummer" name="hausnummer" type="number" placeholder="Hausnummer">
    <!--</div>
    <div class="drei">-->
    <label for="postleitzahl">Postleitzahl</label>
    <input id="postleitzahl" name="postleitzahl" type="number" placeholder="Postleitzahl">
    <label for="ort">Ort</label>
    <input id="ort" name="ort" type="text" placeholder="Ort">
    <label for="telefonnummer">Telefonnummer</label>
    <input id="telefonnummer" name="telefonnummer" type="number" placeholder="Telefonnummer">
    <!--</div>
    <div class="vier">-->
    <label for="email">E-Mailaddresse</label>
    <input id="email" name="email" type="email" placeholder="E-Mailaddresse">
    </div><a id="submit" onclick="buchen()">Termin buchen</a>
    </form>
    <div id="messege"></div>`
    
}

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

