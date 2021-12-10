

function ValidateEmail()
{
var uemail = document.myForm.email;
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("Введите корректный email");
uemail.focus();
return false;
}
}

function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}






function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

$(document).on('input', 'form', function () {
  var Email_name = $('input[name=email]').val();
  var Username = $('input[name=username]').val();
  var Password1 = $('input[name=pwd1]').val();
  var Password2 = $('input[name=pwd2]').val();
        
  if (Username.value == "") {
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }
  pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  re = /^\w+$/;
  if (!re.test(Username.value)) {
    alert("Имя пользователя должно содержать только буквы, цифры и символы подчеркивания!");
    form.username.focus();
    return false;
  }
  if (!pattern.test(Email_name, value))
  {
    alert("Введите корректный email")
    }

  if (Password1.value != "" && Password1.value ==Password2.value) {
    if (form.Password1.value.length < 6) {
      alert("Пароль должен содержать не менее шести символов!");
      form.Password1.focus();
      return false;
    }
    if (form.pwd1.value == form.username.value) {
      alert("Пароль должен отличаться от имени пользователя!");
      form.Password1.focus();
      return false;
    }
    re = /[0-9]/;
    if (!re.test(form.Password1.value)) {
      alert("Пароль должен содержать хотя бы одну цифру");
      form.Password1.focus();
      return false;
    }
    re = /[a-z]/;
    if (!re.test(form.Password1.value)) {
      alert("Пароль должен содержать хотя бы одну строчную букву");
      form.Password1.focus();
      return false;
    }
    re = /[A-Z]/;
    if (!re.test(form.Password1.value)) {
      alert("Пароль должен содержать хотя бы одну заглавную букву");
      form.Password1.focus();
      return false;
    }
  } else {
    alert("Убедитесь, что вы ввели и подтвердили свой пароль!");
    form.Password1.focus();
    return false;
  }
  return true;
}
  



/* function checkForm(){
  document.addEventListener("DOMContentLoaded", function ()
  {
    var checkPassword = function (str)
    {
      var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return re.test(str);
    };

    var checkForm = function(e)
    {
      if(this.username.value == "") {
        alert("Error: Username cannot be blank!");
        this.username.focus();
        e.preventDefault();
        return;
      }
      re = /^\w+$/;
      if(!re.test(this.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        this.username.focus();
        e.preventDefault();
        return;
      }
      if(this.pwd1.value != "" && this.pwd1.value == this.pwd2.value) {
        if(!checkPassword(this.pwd1.value)) {
          alert("The password you have entered is not valid!");
          this.pwd1.focus();
          e.preventDefault();
          return;
        }
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        this.pwd1.focus();
        e.preventDefault();
        return;
      }
      alert("Both username and password are VALID!");
    };

    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", checkForm, true);

    var supports_input_validity = function()
    {
      var i = document.createElement("input");
      return "setCustomValidity" in i;
    }

    if(supports_input_validity()) {
      var usernameInput = document.getElementById("field_username");
      usernameInput.setCustomValidity(usernameInput.title);

      var pwd1Input = document.getElementById("field_pwd1");
      pwd1Input.setCustomValidity(pwd1Input.title);

      var pwd2Input = document.getElementById("field_pwd2");
     

      usernameInput.addEventListener("keyup", function(e) {
        usernameInput.setCustomValidity(this.validity.patternMismatch ? usernameInput.title : "");
      }, false);

      pwd1Input.addEventListener("keyup", function(e) {
        this.setCustomValidity(this.validity.patternMismatch ? pwd1Input.title : "");
        if(this.checkValidity()) {
          pwd2Input.pattern = RegExp.escape(this.value);
          pwd2Input.setCustomValidity(pwd2Input.title);
        } else {
          pwd2Input.pattern = this.pattern;
          pwd2Input.setCustomValidity("");
        }
      }, false);

      pwd2Input.addEventListener("keyup", function(e) {
        this.setCustomValidity(this.validity.patternMismatch ? pwd2Input.title : "")
      }, false)

    }

  }, false);
    if(!RegExp.escape) {
    RegExp.escape = function(s) {
      return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }
  }
} 
*/)
