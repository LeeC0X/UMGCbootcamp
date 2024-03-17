let myFavoriteNum = 8;
let baseUrl="http://numbersapi.com"

async function q1(){
    let data = await $.getJSON(`${baseUrl}/${myFavoriteNum}?json`);
    console.log(data);
}
q1()

let myFavoriteNums = [7,8,9,10];
async function q2(){
    let data = await $.getJSON(`${baseUrl}/${myFavoriteNums}?json`);
    console.log(data); 
}
q2()


async function q3() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseUrl}/${myFavoriteNum}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  q3();