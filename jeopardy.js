const BASE_API_URL = "https://jservice.io/api";
const NUM_CATEGORIES = 6;
const NUM_CLUES_PER_CAT = 5;

// / categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  const response = await axios.get("https://jservice.io/api/categories", {
    params: { count: 100 },
  });
  const NUM_CATEGORIES = response.data.map((c) => c.id);
  return _.sampleSize(NUM_CATEGORIES, 6);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */
async function getCategory(catId) {
  const response = await axios.get("https://jservice.io/api/clues", {
    params: { category: catId },
  });
  const data = response.data;
  const category = {
    title: data[0].category.title,
    clues: data.map((c) => ({
      question: c.question,
      answer: c.answer,
      showing: null,
    })),
  };
  categories.push(category);
  return categories;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function fillTable() {
  $("#title-section").empty();
  $("tbody").empty();

  for (let title of categories) {
    $(`<td>${title.title}</td>`).appendTo("#title-section");
  }
  console.log(title);

  for (let y = 0; y < 5; y++) {
    let $clueRow = $(`<tr class = 'clue-row'>`);

    for (let x = 0; x < 6; x++) {
      $clueRow.append(`<td id= '${x}-${y}'>?</td `);
    }
    $("tbody").append($clueRow);
  }
  handleClick();
}
/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick() {
  $("tbody").on("click", "td", function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    const catId = e.target.id[0];
    const clueId = e.target.id[2];
    const catObj = categories[catId].clues[clueId];

    if (!catObj.showing) {
      e.target.innerHTML = catObj.question;
      catObj.showing = "question";
    } else if (catObj.showing === "question") {
      catObj.showing = "answer";
    } else if (catObj.showing === "answer") {
      return;
    }
  });
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $(".loader").show();
  $("#play").hide();
  $("#title-section").hide();
  $("tbody").hide();
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  $("loader").hide();
  $("#jeopardy").show();
  $("#title-section").show();
  $("tbody").show();
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  categories = [];
  const catId = await getCategoryIds();
  for (let items of catId) {
    categories = await getCategory(items);
  }
  fillTable();
  hideLoadingView();
}

/** On click of start / restart button, set up game. */
$("#jeopardy").on("click", function (e) {
  e.preventDefault();
  showLoadingView();
  setupAndStart();
  $("#jeopardy").text("Restart");
});


// TODO

/** On page load, add event handler for clicking clues */
$(async function () {
  setupAndStart();
  $("#jeopardy").on("click", "td", handleClick);
});
// TODO
