document.addEventListener('DOMContentLoaded', function() {
  // Get the current page filename
  const path = window.location.pathname;
  const page = path.split("/").pop();
  
  console.log("Current page:", page); // Debug line
  
  // Remove active class from all nav items first
  document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Set active class based on current page
  if (page === "index.html" || page === "" || page === "/") {
    document.getElementById("nav-home").classList.add("active");
  } else if (page === "mission.html") {
    document.getElementById("nav-mission").classList.add("active");
  } else if (page === "vision.html") {
    document.getElementById("nav-vision").classList.add("active");
  } else if (page === "focus-areas.html") {
    document.getElementById("nav-focus-areas").classList.add("active");
  } else if (page === "donate.html") {
    document.getElementById("nav-donate").classList.add("active");
  } else if (page === "about.html") {
    document.getElementById("nav-about").classList.add("active");
  } else if (page === "contact.html") {
    document.getElementById("nav-contact").classList.add("active");
  }
}); 