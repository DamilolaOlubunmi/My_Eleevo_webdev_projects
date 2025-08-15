let sidebar = document.getElementById("sidebar");
let menu = document.getElementById("menu");
let body = document.body;

function toggleSidebar(){
    sidebar.classList.toggle("active");
    menu.classList.toggle("active");
    menu.innerHTML = sidebar.classList.contains("active") ? "❌Close" : "⩸ Menu";
    body.style.backgroundColor = sidebar.classList.contains("active") ? "rgba(205, 205, 205, 0.7)" : "#ffffff";
}