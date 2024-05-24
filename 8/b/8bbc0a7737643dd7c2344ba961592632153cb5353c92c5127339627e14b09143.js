/*
Remove numbers from comment author
*/

document.addEventListener('DOMContentLoaded', function (event) {
    var commentForm = document.getElementById("commentform");
    if (null === commentForm) {
        return;
    }
    var author = commentForm.querySelector("#author");
    if (null === author) {
        return;
    }
    author.addEventListener(
        'blur',
        
        false
    );
})
