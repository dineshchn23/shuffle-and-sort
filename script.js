/**
 * Input to the shuffle and sort implementation
 */
let cards = [
  {
    id: 1,
    data: 1,
    color: "#000000",
  },
  {
    id: 2,
    data: 2,
    color: "#333333",
  },
  {
    id: 3,
    data: 3,
    color: "#FFFFFF",
  },
  {
    id: 4,
    data: 4,
    color: "#EFEFEF",
  },
  {
    id: 5,
    data: 5,
    color: "#72C3DC",
  },
  {
    id: 6,
    data: 6,
    color: "#2B8EAD",
  },
  {
    id: 7,
    data: 7,
    color: "#6F98A8",
  },
  {
    id: 8,
    data: 8,
    color: "#BFBFBF",
  },
  {
    id: 9,
    data: 9,
    color: "#2F454E",
  },
];

/**
 * Function to create card div by assigning the background color,
 * key, classname and the content of the element
 */
const childElement = (params) => {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.innerHTML = params.data;
  cardElement.setAttribute("key", params.id);
  cardElement.style.backgroundColor = params.color;
  return cardElement;
};

/**
 * Main function which renders the div elements
 */
const container = document.querySelector("#collection");
const constructElements = (data) => {
  container.innerHTML = "";
  data.forEach((element) => {
    container.appendChild(childElement(element));
  });
};
constructElements(cards);

/**
 * Handles the shuffle button click
 * Swapping the values using current and random index
 */
const shuffleBtn = document.getElementById("shuffle");
shuffleBtn.addEventListener("click", function () {
  cards.forEach((card, index) => {
    const randomIndex = Math.floor(Math.random() * index);
    [cards[index], cards[randomIndex]] = [cards[randomIndex], card];
  });
  constructElements(cards);
});

/**
 * Handles the sort button click
 * Sorts the array in acesending order based on each id in the object
 */
const sortBtn = document.getElementById("sort");
sortBtn.addEventListener("click", function () {
  cards = cards.sort((a, b) => {
    return a.id - b.id;
  });
  constructElements(cards);
});
