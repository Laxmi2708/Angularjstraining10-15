$(document).ready(()=>{
    $("login").click(()=>{
        let email=$("#email").val();
        let password=$("#password").val(); 
        if (validate(email,password)){
           $("message").innerHTML("welcome to the transflower portal");
        }
        else{
            $("message").innerHTML("Login Invalid user, please try again");
        }

    });
  
})
