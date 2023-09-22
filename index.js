// Soal 6
function handleGetFormData(){

    // Mengambil inputan user
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    // Me return dengan hasil berupa object
    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    }
};

// Soal 7
function isNumber(inputUser){
    return !isNaN(inputUser);
};

// Soal 8
function checkboxIsChecked(){
    return document.getElementById("status").checked;
};

// Soal 9
function validateFormData(formData){
    if(formData.name !== null && formData.city !== null && formData.email !== null && isNumber(formData.zipCode) && checkboxIsChecked(formData)) {
        console.log("Seluruh Form telah berhasil terisi.");
        return true;
    }else {
        console.log("Seluruh Form tidak terisi.");
        return false;
    }
};

// Soal 10
function submit(){
    let formData = handleGetFormData();

    if(validateFormData(formData)){
        document.getElementById("warning").textContent = "";
    }else{
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    }
};

document.querySelector('form').addEventListener("submit", event => {
    // Untuk mencegah refresh pada page saat user akan melakukan submit form
    event.preventDefault();
    submit();
});