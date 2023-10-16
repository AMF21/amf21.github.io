const initLikes= 100
const initDislikes= 20

let likesCount = initLikes
let DislikesCount = initDislikes

let likeBtn = document.getElementById("likeBtn")
let dislikeBtn = document.getElementById("dislikeBtn")

likeBtn.innerText = "👍 " + likesCount
dislikeBtn.innerText = "👎 " + DislikesCount

function doLike(){
    likesCount++
    likeBtn.innerText = "👍 " + likesCount
    disableButtons()
    setCookie()
}

function doDislike(){
    DislikesCount++
    dislikeBtn.innerText =  "👎 " + DislikesCount
    disableButtons()
    setCookie()
}

function disableButtons(){
    likeBtn.disabled = true
    dislikeBtn.disabled = true
}

function setCookie(){
    document.cookie = "voted=true; SameSite=Strict;  Max-Age=" + 60
}

window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted")> -1){
        disableButtons()
    }
}