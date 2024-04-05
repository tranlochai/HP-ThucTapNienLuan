const snakes = [
    {
        name: "Rắn lá khô thường",
        scientificName: "Độc",
        image: "h1.jpg" 
      },     
    {
      name: "Rắn cạp nia bắc",
      scientificName: "Độc",
      image: "h2.jpg"
    },
    {
      name: "Rắn cạp nia nam",
      scientificName: "Độc",
      image: "h3.jpg"
    },
    {
      name: "Rắn cạp nong",
      scientificName: "Độc",
      image: "h4.jpg"
    },
    {
      name: "Rắn cạp nong đầu đỏ",
      scientificName: "Độc",
      image: "h5.jpg"
    },
    {
      name: "Rắn hổ mang chúa",
      scientificName: "Độc",
      image: "h6.jpg"
    },
    {
      name: "Rắn hổ mang một mắt kính",
      scientificName: "Độc",
      image: "h7.jpg"
    },
    {
      name: "Rắn hổ mang thường",
      scientificName: "Độc",
      image: "h8.jpg"
    },
    {
      name: "Rắn hổ mang xiêm",
      scientificName: "Độc",
      image: "h9.jpg"
    },
    {
      name: "Rắn lá khô đốm",
      scientificName: "Độc",
      image: "h10.jpg"
    },
    {
      name: "Rắn cạp nia slowinski",
      scientificName: "Độc",
      image: "h11.jpg"
    },
  ];
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSnake() {
    return snakes[getRandomInt(0, snakes.length - 1)];
}

function updateRandomSnake() {
    const randomSnake = getRandomSnake();

    const snakeNameElement = document.getElementById('snakeName');
    snakeNameElement.textContent = randomSnake.name;

    const snakeScientificNameElement = document.getElementById('snakeScientificName');
    snakeScientificNameElement.textContent = randomSnake.scientificName;

    const snakeImageElement = document.getElementById('randomImage');
    snakeImageElement.src = `images/anhtam/${randomSnake.image}`;
    snakeImageElement.alt = randomSnake.name;
}

// Call the function to update information and image initially and on reload
updateRandomSnake();
