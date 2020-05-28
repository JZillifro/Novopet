function fill_wall(name) {
  for(var i = 0; i < 25; i++) {
    var block = document.createElement("img");
    block.src = "https://tr.rbxcdn.com/6473dbb20816fe2a17dafd5d01438242/420/420/Decal/Png";
    block.className = "wall_block";
    var wall = document.getElementById(name);
    wall.appendChild(block);
  }
}

document.addEventListener('DOMContentLoaded', function () {

  fill_wall("wall_back");
  fill_wall("wall_top");
  fill_wall("wall_bottom");
  fill_wall("wall_right");
  fill_wall("wall_left");

});
