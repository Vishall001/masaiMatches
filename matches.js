// write js code here corresponding to matches.html


  var  Matcharr = JSON.parse(localStorage.getItem("schedule"))
   var tbody = document.querySelector("tbody")
   var filter =document.getElementById("filterVenue")
   Matcharr.forEach(function(ele){
      var tr1 =document.createElement("tr")
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
      td6.innerText="Favourites"
      td6.style.cursor ="pointer"
      td6.style.color ="green"
      td6.addEventListener("click",function(){
          onclick(ele)
      })
        tr1.append(td1,td2,td3,td4,td5,td6)
         tbody.append(tr1)
  })
  function onclick(ele){
        Matcharr.push(ele)
       // console.log(Matcharr)

        localStorage.setItem("favourites",JSON.stringify(Matcharr))
  }

