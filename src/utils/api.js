const defaultUrl = "https://api.punkapi.com/v2";

const customFetch = async (url, method = "GET") => {
    return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url) 
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => resolve(xhr.response)
    xhr.onerror = () => reject((`Ошибка ${xhr.status}: ${xhr.statusText}`))

})
}

export const fetchBeers = async (page = 1, input = null) => {
    const beerQuery = input.text ? `beer_name=${input.text}` : '';
    const url = `${defaultUrl}/beers?${beerQuery}&page=${page}`;
    const response = await customFetch(url);
    return response;     
}

export const fetchFavoriteBeers = async (beerIds, page = 1, itemsPerPage = 5) => {
    const url = `${defaultUrl}/beers?${[`ids=${beerIds.join('|')}`, `page=${page}`, `pre_page=${itemsPerPage}`].join('&')}`;
    const response = await customFetch(url);
    return response;     
}
