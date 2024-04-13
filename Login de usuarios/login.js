function logg(){
    let user = document.getElementById('user').value;
    let password= document.getElementById('password').value;

if((user=='Rosa' || 'rosa') && password==100423){
    window.location.href= "welcome.html";
}else{
    alert('Try again, the user or the password is incorrect ');
    cleardisplay();
}
}
function cleardisplay(){
    document.getElementById('password').value = '';
    document.getElementById('user').value = '';
    }
    
