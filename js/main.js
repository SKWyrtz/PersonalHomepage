let csgo1 = document.querySelector(".csgo")
let time = document.querySelector("#time")
let date = document.querySelector("#date")

let result

fetchCSGO()
setTime()


function setTime(){
  let today = new Date
  console.log(today)

  let currentTime = today.getHours() + ":" + today.getMinutes()
  let currentDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
  time.innerHTML = currentTime
  date.innerHTML = currentDate
}

async function fetchCSGO(){
    await fetch('https://www.reddit.com/r/GlobalOffensive/top.json?limit=10')
  .then(response => response.json())
  .then(data => result = data);
  console.table(result.data.children[0].data)
  csgo1.innerHTML = result.data.children[0].data.title

  //console.table(data.data.children[0].data.title)
/*
  axios.get('https://www.reddit.com/r/GlobalOffensive/top.json?limit=10').then(response => {
      console.log(response)
  })
  */
}