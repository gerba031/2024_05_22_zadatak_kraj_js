/* Napraviti html stranicu koja ima 2 input box-a u koje možemo unijeti samo brojeve. Dodati na stranicu treći input box koji je readonly u koji će se ispisati rezultat izračunavanja.
Dodati na stranicu button koji ce na onclick event pozvati funkciju iz javascripta.
Dodatak za veću ocjenu : - dodati button koji će random unijeti dva broja u input box-ove i odraditi automatsko izračunavanje

Napraviti javascript sa funkcijom koja će raditi slijedeće:
- za parametre prima 2 ulazna podatka
- provjeriti da su ulazni podaci brojevi 
- u slučaju da je jedan od podataka krivi, odnosno nije broj, u label ispisati grešku odnosno rezultat funkcije ( funk. mora vratiti točnu pogrešku)
- u slučaju da su ulazni parametrei ispravni odraditi slijedeće :
    - vratiti rezultat koje je od dva ulazna broja veći 
    - ukoliko su oba broja jednaka, vratiti prvi 

- css -om odraditi slijedeće:
- ukoliko je gunkciaj vratila usrpravnu vrijednost obojati pozadinu trećeg textbox.a u zelenu boju
- ukoliko je funkcija vratila grešku obojati pozadinu trećeg textboxa u crvenu boju

*/

var box1 = Number
var box2 = Number

function getRndInteger() {
    let box1 = document.getElementById("box1");
    box1.value = Math.floor(Math.random() * 100) + 1;

}
function getRndInteger2() {
    let box2 = document.getElementById("box2");
    box2.value = Math.floor(Math.random() * 100) + 1;
}

