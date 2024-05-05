function submitHandler() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    // Pengkondisian
    if (name == "") {
        return alert("please entered your name!")
    } else if (email == "") {
        return alert("please entered your email!")
    } else if (phone == "") {
        return alert("please entered your phone!")
    } else if (subject == "") {
        return alert("please entered your subject!")
    } else if (message == "") {
        return alert("please entered your message!")
    }

    const data = {
        name, email, phone, subject, message
    }
    
    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`
    a.click();

    // melihat data
    console.log(data);

}