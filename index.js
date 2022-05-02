// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",sybmitfuc);

function sybmitfuc(){
    var matchData = JSON.parse(localStorage.getItem("schedule"))||[]

    event.preventDefault()
     var  matchnumber =masaiForm.matchNum.value;
   //  console.log(matchnumber)
     var teamA =masaiForm.teamA.value
   //  console.log(teamA)
     var teamB =masaiForm.teamB.value
    // console.log(teamB)
     var date = masaiForm.date.value
   //  console.log(date)
     var venue =masaiForm.venue.value
   //  console.log(venue)

     var obj ={
         "Matchnumber" : matchnumber,
         "teamA"  :teamA,
         "teamB" :teamB,
         "Date"  :date,
         "Venue" :venue,
     }
  matchData.push(obj)
   //console.log(matchData)

     localStorage.setItem("schedule",JSON.stringify(matchData))
} 