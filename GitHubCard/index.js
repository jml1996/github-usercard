import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardsDiv = document.querySelector(".cards");
axios
  .get("https://api.github.com/users/jml1996")
  .then((response) => {
    // debugger;
    // const data = response;
    cardsDiv.appendChild(cardMaker(response.data));
  })
  .catch(() => console.log("Error:"))
  .finally(() => console.log("Done"));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach((follower) => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then((response) => {
      cardsDiv.appendChild(cardMaker(response.data))
    })
    .catch(() => console.log("Error:"))
    .finally(() => console.log("Done"));
});

// followersArray.forEach(cardsDiv.appendChild(cardMaker(response.data)));

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj){
  // debugger;
  const userCard = document.createElement("div"); // class: card
  const userImg = document.createElement("img");
  const cardInfo = document.createElement("div"); // card-info
  const userRealName = document.createElement("h3"); // name
  const username = document.createElement("p"); // username
  const locationP1 = document.createElement("p"); // 
  const profileP2 = document.createElement("p"); //
  const profileLink = document.createElement("a"); //
  const followersP3 = document.createElement("p"); //
  const followingP4 = document.createElement("p"); //
  const bioP5 = document.createElement("p"); //

  userCard.appendChild(userImg);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(userRealName);
  cardInfo.appendChild(username);
  cardInfo.appendChild(locationP1);
  cardInfo.appendChild(profileP2);
  // profileP2.appendChild(profileLink);
  cardInfo.appendChild(followersP3);
  cardInfo.appendChild(followingP4);
  cardInfo.appendChild(bioP5);

  userCard.classList.add("card");
  cardInfo.classList.add("card-info");
  userRealName.classList.add("name");
  userRealName.classList.add("username");

  userImg.src = obj["avatar_url"];
  // debugger;
  userRealName.textContent = obj["name"];
  username.textContent = obj["login"];
  locationP1.textContent = `Location: ${obj["location"]}`;
  
  profileLink.href = obj["html_url"];
  profileLink.textContent = obj["html_url"];
  profileP2.textContent = "Profile: ";
  profileP2.appendChild(profileLink);
  followersP3.textContent = `Followers: ${obj["followers"]}`;
  followingP4.textContent = `Following: ${obj["following"]}`;
  bioP5.textContent = `Bio: ${obj["bio"]}`;

  return userCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
