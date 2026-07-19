let myopt = document.querySelectorAll('.otpinput')
// console.log(myopt);

for(let i = 0; i < myopt.length;i++){
    myopt[i].addEventListener('keyup',function(){
        if(this.nextElementSibling == null){
            Swal.fire(
                'Wow !',
                'You are Verfied ..',
                'success'
              )
        }else{
            this.nextElementSibling.focus();
        }

    } )
}