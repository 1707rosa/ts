function logg(){
    let user = document.getElementById('user').value;
    let password= document.getElementById('password').value;

if((user=='Rosa' || 'rosa') && password==100423){
    window.location.href= "welcome.html";
}else{
    alert('Incorret');
}
}
