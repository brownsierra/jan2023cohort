var likeCount = 3;
var likeHeader = document.querySelector("#likeamount");

function like () {
    likeCount++;
    likeHeader.innerText = likeCount + " like(s)";
}