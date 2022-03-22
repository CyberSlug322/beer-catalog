const defaultUrl = "https://api.punkapi.com/v2";

export const getBeers = async (page = 1) => {
    const url = `${defaultUrl}/beers?page=${page}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        const responseObj = xhr.response;
        return responseObj;
    }
    xhr.onerror = () => {
        throw new Error(`Ошибка ${xhr.status}: ${xhr.statusText}`)
    }
}



