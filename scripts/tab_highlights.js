var page = window.location.href;
page = page.substr(page.lastIndexOf("/") + 1);
page = page.substr(0,page.lastIndexOf("."));
page = page + "-tab";
document.getElementById(page).style.backgroundColor = "#405c3d";


var a_tag = document.getElementById(page).getElementsByTagName("a")[0]; 
a_tag.style.color = "#f0f0e8";

