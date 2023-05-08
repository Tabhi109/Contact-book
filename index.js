//Set Contact
function addContact() {
    let cName = document.querySelector('#name').value.toUpperCase();
    let cNumber = document.querySelector('#number').value;
    let dispNoti = document.querySelector('#displayNotif');

    if(cName == "" || cNumber == "" ) {
        dispNoti.innerHTML = "Please Enter details !";
        dispNoti.style.color = "red";
    }
    else {
        localStorage.setItem(cName,cNumber);
        dispNoti.innerHTML = " Contact Added Successfully ";
        dispNoti.style.color = " green ";
    }
    setInterval(() => {
        dispNoti.innerHTML = "";
    },2000);
}

//Get Contact
function getContact() {
    let displayDetail = document.querySelector("#displayContact");
    let displayOutput = document.getElementById("displayContact");
    displayOutput.classList.add('displayContactStyle');

    let getContactame = document.querySelector('#getContactName').value.toUpperCase();

    //get items

    let output = localStorage.getItem(getContactame);
    displayDetail.innerHTML = `${getContactName} : ${
        output == null ? "(  This contact detail is not added" : `+91 ${output}`}`;
        getContactName = "";
    }

    function reset() {
        location.reload();
    }