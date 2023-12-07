"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteBtn = false) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();

  const showStar = Boolean(currentUser);
  return $(`
      <li id="${story.storyId}">
      ${showDeleteBtn ? getDeleteBtnHTML() : ""}
      ${showStar ? getStarHTML(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}
function getDeleteBtnHTML() {
  return `
  <span class="trash-can">
  <i class="trash-alt"></i>
  </span>`;
}
function getStarHTML(story, user) {
  const isFavorite = user.isFavorite(story);
  const starType = isFavorite ? "favs" : "far";
  return `
  <span class="star">
  <i class="${starType} favs-star"></i>
  </span>`;
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}
async function deleteStory(evt) {
  console.debug("deleteStory");

  const $closestList = $(evt.target).closest("li");
  const storyId = $closestList.attr("id");

  await storyList.removeStory(currentUser, storyId);

  await putUserStoriesOnPage();
}
$yourStories.on("click", ".trash-can", deleteStory);

async function submitNewStory(evt) {
  console.debug("submitNewStory");
  evt.preventDefault();

  const title = $("#created-title").val();
  const url = $("#created-url").val();
  const author = $("#created-author").val();
  const username = currentUser.username;
  const storyData = { title, url, author, username };

  const story = await storyList.addStory(currentUser, storyData);

  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  $submitForm.slideup("slow");
  $submitForm.trigger("reset");
}

$submitForm.on("submit", submitNewStory);

function putUsersStoriesOnPage() {
  console.debug("putUserStoriesOnPage");

  $yourStories.empty();

  if (currentUser.yourStories.length === 0) {
    $yourStories.append("<h5>No user stories entered</h5>");
  } else {
    for (let story of currentUser.yourStories) {
      let $story = generateStoryMarkup(story, true);
      $yourStories.append($story);
    }
  }

  $yourStories.show();
}

function putFavoritesOnPage() {
  console.debug("putFavoritesOnPage");

  $favoriteStories.empty();

  if (currentUser.favorite.length === 0) {
    $favoriteStories.append("<h5>No favorites added</h5>");
  } else {
    for (let story of currentUser.favorites) {
      const $story = generateStoryMarkup(story);
      $favoriteStories.append($story);
    }
  }

  $favoriteStories.show();
}

async function toggleFavoriteStory(evt) {
  console.debug("toggleFavoriteStory");

  const $target = $(evt.target);
  const $closestList = $target.closest("li");
  const storyId = $closestList.attr("id");
  const story = storyList.stories.find((s) => s.storyId === storyId);

  if ($target.hasClass("favs")) {
    await currentUser.removeFavorite(story);
    $target.closest("i").toggleClass("favs far");
  } else {
    await currentUser.addFavorite(story);
    $target.closest("i").toggleClass("favs far");
  }
}

$allStoriesList.on("click", ".star", toggleStoryFavorite);
