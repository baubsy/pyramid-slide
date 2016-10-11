
//gets the height

//prints the pyramid
var blocks = 2;
var row = "";

function printPyramid()
{
  //console.log("FUnction ran")//debug
  var strHeight = document.getElementById("height").value;
  var height = parseInt(strHeight);

  //clears old pyramid
  event.preventDefault();
  document.getElementById("pyramid").innerHTML = "";
  blocks = 2;
for(var i = 0; i < height - 1; i++)
{
  row = "";
  for(var j = 0; j < height - blocks; j++)
  {
    row = row + ".";
  }
  for(var x = 0; x < blocks; x++)
  {
    row = row + "#";
  }
  blocks++;
  var node = document.createElement("P");

  var text = document.createTextNode(row);

  node.appendChild(text);

  document.getElementById("pyramid").appendChild(node);
}

}
