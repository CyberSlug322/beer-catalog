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

export const fetchBeers = async (page = 1) => {
    const url = `${defaultUrl}/beers?page=${page}`;
    const response = await customFetch(url);
    return response;     
}

