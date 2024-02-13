// alert(null || 2 || undefined); //2

//2
// alert( alert(1) || alert(3) || 2  );

// alert( alert(1) && alert(2) );


// if (-1 || 0) alert( 'first' );//runs

let username = prompt("Who there?", '');
if(username =='Admin'){
    let pass = prompt('Password?', '');

    if(pass == "TheMaster"){
        alert("WelcomeA");
    } else {
        alert('Wrong password');
    }
}