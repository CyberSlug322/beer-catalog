const defaultUrl = "https://api.punkapi.com/v2";

const myFetch = async (url, method = "GET") => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url) 
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
        const responseObj = xhr.response;
        return responseObj;      
    }
    xhr.onerror = (e) => {
        return (`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
}

export const getBeers = async (page = 1) => {
    const url = `${defaultUrl}/beers?page=${page}`;
    const response = await myFetch(url);
    return response;     
}





