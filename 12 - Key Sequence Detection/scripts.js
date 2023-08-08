const pressed = [];
const secretCode = "kiwi";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key); // push key in the array
  // splice(start, deleteCount)
  // splice in place: check last 4 letters
  // eg. pressed = [a, b, c, d, e, k, i, w, i]; pressed.splice => [k, i, w, i];
  pressed.splice(
    -secretCode.length - 1,
    pressed.length - secretCode.length
  );
  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING!");
    cornify_add();
  }
  console.log(pressed);
});
