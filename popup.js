function fill_wall(wall_id, texture) {
  for(var i = 0; i < 16; i++) {
    var block = document.createElement("img");
    block.src = texture;
    block.className = "wall_block";
    var wall = document.getElementById(wall_id);
    wall.appendChild(block);
  }
}

document.addEventListener('DOMContentLoaded', function () {

  fill_wall("wall_back", "https://tr.rbxcdn.com/6473dbb20816fe2a17dafd5d01438242/420/420/Decal/Png");
  fill_wall("wall_top", "https://pbs.twimg.com/media/DwQIdH2XcAAvpO4.jpg");
  fill_wall("wall_bottom", "https://lh3.googleusercontent.com/HUlj1PBI0tiE9_XQyhpLuQmJ67NKrRLR6R4vEbSjxVuQJIo4_eFPwHZ-b-OPZSgdAeq0HzfsQ_6vVayappEB7g=s400");
  fill_wall("wall_right", "https://tr.rbxcdn.com/6473dbb20816fe2a17dafd5d01438242/420/420/Decal/Png");
  fill_wall("wall_left", "https://tr.rbxcdn.com/6473dbb20816fe2a17dafd5d01438242/420/420/Decal/Png");

});
