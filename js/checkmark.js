function change() //Creates function called change that is run when HTML element is clicked on with the attribute onclick="change()"
{
    let elem = document.getElementById("yes-button"); //Creates an element called elem from the HTML ID yes-button
    if (elem.innerHTML=="SAY YES") elem.innerHTML = "&#x2713;"; //If the inner HTML code contains the content 'SAY YES' change it to the unicode for a checkmark
    else elem.innerHTML = "SAY YES"; //If clicked again, change back to "SAY YES"
}

