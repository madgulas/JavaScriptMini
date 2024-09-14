var istatus = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var check = 0



addFriend.addEventListener("click",function(){
   
    if (check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addFriend.innerHTML = "Remove Friend"
    addFriend.style.backgroundColor = "Red"
     check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "Red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "rgb(95, 158, 160)"
        
        check = 0
    }
})

