
let time = document.querySelector("#time")
let date = document.querySelector("#date")

let redditResult
let hltvResult

fetchReddit()
fetchHLTV()
setTime()


function setTime(){
  let today = new Date
  /* console.log(today) */

  let currentTime = today.getHours() + ":" + today.getMinutes()
  let currentDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
  time.innerHTML = currentTime
  date.innerHTML = currentDate
}

async function fetchReddit(){
    await fetch('https://www.reddit.com/r/GlobalOffensive/top.json?limit=5')
  .then(response => response.json())
  .then(data => redditResult = data);
  /* console.log(redditResult.data.children[0].data) */

  let i = 0;

  redditResult.data.children.forEach(element => {
    let r1 = document.querySelector("#r" + i)
    let upvotes = document.querySelector('#up' + i)

    r1.innerHTML = element.data.title.slice(0, 100) + "..."
    let postName = element.data.name.slice(3)
    r1.href = "https://www.reddit.com/r/GlobalOffensive/comments/" + postName
    upvotes.innerHTML = element.data.score
    i++
  });
}

  async function fetchHLTV() {
    await fetch('https://www.hltv.org/matches?predefinedFilter=top_tier')
    .then(response => response.text())
    .then(text => hltvResult = text);
    console.log(hltvResult);
  }
  

  //console.table(data.data.children[0].data.title)
/*
  axios.get('https://www.reddit.com/r/GlobalOffensive/top.json?limit=10').then(response => {
      console.log(response)
  })
  */
