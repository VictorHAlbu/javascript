async function fetchProdutos(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}


fetchProdutos("https://pokeapi.co/api/v2/");