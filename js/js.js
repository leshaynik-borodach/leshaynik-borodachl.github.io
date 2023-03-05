// Л О Г И Н
function login(){
    let phone = document.querySelector(".phone_number_input").value;
    let pass = document.querySelector(".pass_input").value;

    if (phone === "89134656424" && pass === "12345678"){
        alert("кабан");
    }
    else if(phone.length === 0 || pass.length === 0){
        alert("Заполни все поля!");
    }
    else{
        alert("Аккаунт не найден!");
    }
}

//  Р Е Г И С Т Р А Ц И Я
function regist(){
    let ph_regi = document.querySelector(".pn_regi_input").value;
    let pass_regi = document.querySelector(".pass_regi_input").value;
    let pass_reap_regis = document.querySelector(".pass_repeat_regis_input").value;
    if  (ph_regi.length === 0 || pass_regi === 0 || pass_reap_regis.length === 0 || pass_regi !== pass_reap_regis ||
        ph_regi.length !== 11 || pass_regi.length < 8 && pass_reap_regis.length < 8){


        if(ph_regi.length === 0 || pass_regi === 0 || pass_reap_regis.length === 0 ){
            alert("Заполни все поля!");
        }
        else if(ph_regi.length !== 11){

            alert("Неверный номер телефона!")
        }
        else if (pass_regi.length < 8 && pass_reap_regis.length < 8){
            alert("В пароле должно быть минимум 8 символов!");
        }
        else if (pass_regi !== pass_reap_regis || ph_regi.length === 0 || pass_regi === 0 || pass_reap_regis.length === 0){
            alert("Пароли не совпадают!");
        }


    }


    else {
        alert("кабан");
    }


}
