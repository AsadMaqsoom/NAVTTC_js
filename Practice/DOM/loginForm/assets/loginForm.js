const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let userpass = document.getElementById("userpass").value;
    const email = "asad@gmail.com";
    const password = 1234;

        if (username == email && userpass == password) {
            alert("successfully login")
            window.location.href = "Homepage.html";
            sessionStorage.setItem('isloggin','true')
        } else {
            alert("invalid username")
        }
})
if (sessionStorage.getItem('isloggin') == 'true') {
    alert("You Already Logged In");
    // Redirecting to homepage.html if already logged in
    window.location.href = 'homepage.html';
  }