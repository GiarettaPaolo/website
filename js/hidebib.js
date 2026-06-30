function toggleblock(blockId) {
  var block = document.getElementById(blockId);
  if (!block) {
    return;
  }
  if (block.style.display === "none") {
    block.style.display = "block";
  } else {
    block.style.display = "none";
  }
}
