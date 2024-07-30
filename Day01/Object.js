const player = {
    name:"lily",
    points : 10,
    fat : true
}

console.log(player);
console.log( "playername : " + player.name);
console.log(player["name"]);

// 속성 변경
player.fat = false;
console.log(player);

// 추가
player.lastName = "potato";
console.log(player);

player.points = player.points + 15;
console.log("playerpoints : " + player.points)

