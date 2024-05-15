function generator(){
    let title = prompt("Enter video Title");
    let name = prompt("Enter channel name");
    let views = prompt("Enter no.of views");
    let date = prompt("Enter uploaded date");
    document.getElementById("title").innerHTML = title;
    document.getElementById("name").innerHTML = name;
    document.getElementById("views").innerHTML = views;
    document.getElementById("date").innerHTML = date;
}
