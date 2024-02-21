var users= [
    {id:210 , username:'mohadese', password:'654' , fullname:'mohadese akrami' , isActive:true},
    {id:211 , username:'motahare', password:'321' , fullname:'motahare alavi' , isActive:true},
    {id:121 , username:'zohre', password:'987' , fullname:'zohre samari' , isActive:true}
];



$(document).ready(function(){
    $("#login-button").click(function(){
        Login();

    });
});


function Login()
{
   //1.select data from DOM
var username=$("#username").val();
var password=$("#password").val();
$("#message").html("").removeClass();

//2.validation
if(username.length <= 3 || password.length <= 0 )
{
    $("#message").text("لطفا نام کاربری / رمزعبور را وارد نمایید").addClass("alert alert-danger");
     return;
}
//3.business
var user=Enumerable.From(users).Where(x=>x.username == username).SingleOrDefault();
if (user != null && user.password == password) {
        localStorage.setItem("username", username);
        window.location.href = "cart.html";

    } else {
        $("#message").text("نام کاربری یا رمزعبور صحیح نمی باشد").addClass("alert alert-danger");
    }


} 
