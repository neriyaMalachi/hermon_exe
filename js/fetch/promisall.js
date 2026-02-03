async function ex12() {
  const urls = [
    "https://official-joke-api.appspot.com/random_joke",
    "https://official-joke-api.appspot.com/random_joke",
    "https://official-joke-api.appspot.com/random_joke",
  ];

  const promises = urls.map((url) => fetch(url).then((r) => r.json()));

  const jokes = await Promise.all(promises); // מחכה ששלושתם יסתיימו

  jokes.forEach((joke, i) => {
    console.log(`Joke ${i + 1}: ${joke.setup}`);
  });
}

ex12();
