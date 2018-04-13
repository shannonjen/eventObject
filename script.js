//add a click eventlistener to the elements that have a class of greeting that console logs "hello"var images =
var images = {
  "a": "https://cdn.pixabay.com/photo/2016/10/02/00/53/a-1708752_960_720.png",
  "b": "https://cdnimages.opentip.com/full/VLL/VLL-LET-B.jpg",
}
var greeting = document.querySelector(".greeting");
var sentence = ""
window.addEventListener("keydown", function(event){

  if (event.key == "Backspace"){
    sentence = sentence.slice(0,-1);
    //console.log("You hit delete")
  } else {
    sentence = sentence + event.key;
  }

  greeting.textContent = sentence;

    // document.querySelector("img").setAttribute("src", images[event.key])


})
