async function getArticles() {
  try {
    let data = await fetch("file.json");
    return data;
  } catch (err) {
    console.log(`There is Error Here ${err}`);
  }
}

function createArticle(title, description) {
  let article = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerHTML = title;
  let p = document.createElement("p");
  p.innerHTML = description;
  article.appendChild(h3);
  article.appendChild(p);

  return article;
}

async function showArticles() {
  let Artiles = await getArticles().then((res) => res.json());
  console.log(Artiles);
  for (let i = 0; i < 5; i++) {
    document.body.appendChild(
      createArticle(Artiles[i]["title"], Artiles[i]["description"])
    );
  }
}

showArticles();
