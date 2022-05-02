// write js code here corresponding to favourites.html


var favouritesteam = JSON.parse(localStorage.getItem("favourites"))
var tBody =document.querySelector("tbody")
   favouritesteam.forEach(function(ele){
    var match =JSON.parse(localStorage.getItem("favourites"))|| []

    document.querySelector("tbody").innerHTML = "";

    var trr =document.createElement("tr")
    var td1 =document.createElement("td")
     td1.innerText = ele.Matchnumber
    var td2 =document.createElement("td")
    td2.innerText =ele.teamA
    var td3 =document.createElement("td")
    td3.innerText =ele.teamB
    var td4 =document.createElement("td")
    td4.innerText=ele.Date
    var td5 =document.createElement("td")
   td5.innerText=ele.Venue
    var td6 =document.createElement("td")
    td6.innerText="Delete"
    td6.style.cursor ="pointer"
    td6.style.color ="green"
    td6.addEventListener("click",function(){
        onclick(ele,index)
    })
      trr.append(td1,td2,td3,td4,td5,td6)
       tBody.append(trr)
   })
   function onclick(ele){
       favouritesteam.splice(index,1)
    localStorage.setItem("bookmarks", JSON.stringify(favouritesteam));

   // console.log(Matcharr)

    localStorage.setItem("favourites",JSON.stringify(favouritesteam))
}
    
