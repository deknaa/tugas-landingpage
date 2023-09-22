function handleGetFormData(){
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    return {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    }
};

function isNumber(inputUser){
    return !isNaN(inputUser);
};

function checkboxIsChecked(){
    return document.getElementById("status").checked;
};

function validateFormData(formData){
    if(formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked(formData)) {
        console.log("Seluruh Form telah berhasil terisi.");
        return true;
    }else {
        console.log("Seluruh Form tidak terisi.");
        return false;
    }
};

function submit(){
    let formData = handleGetFormData();

    if(validateFormData(formData)){
        document.getElementById("warning").textContent = "";
    }else{
        document.getElementById("warning").textContent = "Periksa form anda sekali lagi";
    }
};

document.querySelector('form').addEventListener("submit", event => {
    event.preventDefault();
    submit();
});