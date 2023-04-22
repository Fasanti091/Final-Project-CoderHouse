function getCharacters(done) {

    const result = fetch("https://rickandmortyapi.com/api/character");

    result
        .then(response => response.json())
        .then(data => {
            done(data)
        });


}

getCharacters(data => {
    data.results.forEach(Personaje => {
        const article = document.createRange().createContextualFragment(/* HTML */`
        
        <article>
            <div class="image-container">
                <img src="${Personaje.image}" alt="Personaje">
            </div>

            <h2>${Personaje.name}</h2>
            <span>${Personaje.status}</span>
        </article>
        
        `
        );

        const mains = document.querySelector("mains");
        mains.append(article);
    });
});
