let csgo1 = document.querySelector(".csgo")

let result

test()


async function test(){
    await fetch('https://www.reddit.com/r/GlobalOffensive/top.json?limit=10')
  .then(response => response.json())
  .then(data => result = data);
  console.table(result)
  csgo1.innerHTML = result.data.children[0].data.title
  //console.table(data.data.children[0].data.title)
/*
  axios.get('https://www.reddit.com/r/GlobalOffensive/top.json?limit=10').then(response => {
      console.log(response)
  })
  */
}