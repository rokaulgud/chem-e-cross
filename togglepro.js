function showDecember(){
    document.getElementById("leaderboard-table-d").classList.remove("hidelb");
    document.getElementById("leaderboard-table-o").classList.remove("leaderboard-table");
    document.getElementById("leaderboard-table-d").classList.add("leaderboard-table");
    document.getElementById("leaderboard-table-o").classList.add("hidelb");
    
    document.getElementById("lbswitch-d").classList.remove("lbswitch-inactive");
    document.getElementById("lbswitch-o").classList.remove("lbswitch-active");
    document.getElementById("lbswitch-d").classList.add("lbswitch-active");
    document.getElementById("lbswitch-o").classList.add("lbswitch-inactive");
}
function showOverall(){
    document.getElementById("leaderboard-table-o").classList.remove("hidelb");
    document.getElementById("leaderboard-table-d").classList.remove("leaderboard-table");
    document.getElementById("leaderboard-table-o").classList.add("leaderboard-table");
    document.getElementById("leaderboard-table-d").classList.add("hidelb");

    document.getElementById("lbswitch-o").classList.remove("lbswitch-inactive");
    document.getElementById("lbswitch-d").classList.remove("lbswitch-active");
    document.getElementById("lbswitch-o").classList.add("lbswitch-active");
    document.getElementById("lbswitch-d").classList.add("lbswitch-inactive");
}