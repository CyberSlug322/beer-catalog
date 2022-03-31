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

export const fetchBeers = async (page = 1, input = '', alcoholVolume = 0, IBU = 0, EBC = 0) => {
    const nameParam = input.text ? `beer_name=${input.text}` : '';
    const alcParam = `abv_gt=${alcoholVolume}`;
    const bitternessParam = `ibu_gt=${IBU}`;
    const ebcColorParam = `ebc_gt=${EBC}`;
    const pageParam = `page=${page}`
    const url = `${defaultUrl}/beers?${[nameParam, alcParam, bitternessParam, ebcColorParam, pageParam].filter(e => e!=='').join('&')}`;
    const response = await customFetch(url);
    return response;     
}

export const exampleBeer = [
    {
      id:1,
      name:"Buzz",
      tagline:"A Real Bitter Experience.",
      description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
    },
    {
        id:1,
        name:"Buzz",
        tagline:"A Real Bitter Experience.",
        description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
      },
      {
        id:1,
        name:"Buzz",
        tagline:"A Real Bitter Experience.",
        description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
      },
      {
        id:1,
        name:"Buzz",
        tagline:"A Real Bitter Experience.",
        description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
      },
      {
        id:1,
        name:"Buzz",
        tagline:"A Real Bitter Experience.",
        description:"A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
      },
  ]
  

