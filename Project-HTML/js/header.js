const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="css/menu.css"/>
<link rel="stylesheet" href="css/login.css"/>
<div class="topnav">
  <a class="active" href="Home.html">Home</a>
  <a href="AboutUs.html">About Us</a>
  <a href="Courses.html">Courses</a>
  <a href="Schedule.html">Schedule</a>
  <a href="ContactUs.html">Contact Us</a>
  <button class="nav-login" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
</div>

  
<div id="id01" class="modal"> 
<form class="modal-content animate">
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>    
    <button type="submit" class="btnlogin">Login</button>
    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
  </div>
</form>
</div>
<script>
// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
</script>
</html>`;

document.body.appendChild(template.content);