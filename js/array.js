const movies = [
    {title: "El Padrino", genre: "Drama", year: 1972},
    {title: "Forrest Gump", genre: "Comedia", year: 1994},
    {title: "Matrix", genre: "Acción", year: 1999},
    {title: "El club de la pelea", genre: "Drama", year: 1999},
    {title: "La lista de Schindler", genre: "Drama", year: 1993},
    {title: "El gran Lebowski", genre: "Comedia", year: 1998},
    {title: "Terminator 2", genre: "Acción", year: 1991},
    {title: "The Shawshank Redemption", genre: "Drama", year: 1994},
    {title: "The Godfather", genre: "Drama", year: 1972},
    {title: "The Dark Knight", genre: "Acción", year: 2008},
    {title: "Pulp Fiction", genre: "Drama", year: 1994},
    {title: "Forrest Gump", genre: "Drama", year: 1994},
    {title: "The Matrix", genre: "Acción", year: 1999},
    {title: "Inception", genre: "Ciencia ficción", year: 2010},
    {title: "Goodfellas", genre: "Drama", year: 1990},
    {title: "Star Wars: Episode IV - A New Hope", genre: "Ciencia ficción", year: 1977},
    {title: "Jurassic Park", genre: "Ciencia ficción", year: 1993},
  ];
  
  function showMovies(movies) {
    const moviesTable = document.querySelector("#movies");
    moviesTable.innerHTML = "";
  
    if (movies.length === 0) {
      moviesTable.innerHTML = "<tr><td colspan='3'>No se encontraron películas</td></tr>";
    } else {
      // Crea la fila de encabezado de la tabla
      const headerRow = document.createElement("tr");
      const titleHeader = document.createElement("th");
      titleHeader.textContent = "Título";
      const yearHeader = document.createElement("th");
      yearHeader.textContent = "Año";
      const genreHeader = document.createElement("th");
      genreHeader.textContent = "Género";
      headerRow.appendChild(titleHeader);
      headerRow.appendChild(yearHeader);
      headerRow.appendChild(genreHeader);
      moviesTable.appendChild(headerRow);
  
      // Crea una fila por cada película y agrega sus datos a la tabla
      movies.forEach(movie => {
        const movieRow = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = movie.title;
        const yearCell = document.createElement("td");
        yearCell.textContent = movie.year;
        const genreCell = document.createElement("td");
        genreCell.textContent = movie.genre;
        movieRow.appendChild(titleCell);
        movieRow.appendChild(yearCell);
        movieRow.appendChild(genreCell);
        moviesTable.appendChild(movieRow);
      });
    }
  }
  
  
  
  function filterMovies() {
    const title = document.querySelector("#title").value.trim().toLowerCase();
    const genre = document.querySelector("#genre").value;
    const year = parseInt(document.querySelector("#year").value);
    
    let filteredMovies = movies.filter(movie => {
      return (movie.title.toLowerCase().includes(title) || title === "") &&
             (movie.genre === genre || genre === "") &&
             (isNaN(year) || movie.year === year);
    });

    console.log(filteredMovies); // Agregado para depuración

    showMovies(filteredMovies);
  }
  

const filterButton = document.querySelector("#filter");
filterButton.addEventListener("click", filterMovies);

filterButton.onclick = () =>{
  Swal.fire(
    'Datos cargados',
    'se genero una tabla con resultados',
    'success'
  );
}


/*!

 * Estilos de boosrap 5.3 incorporados al proyecto 
 * Modo oscuro
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()

