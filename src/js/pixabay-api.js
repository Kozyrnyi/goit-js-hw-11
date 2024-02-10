export function pixabayAPI(searchQuery) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '42305957-2425bb18c357c2a7b9cbd48a2';
    const URL = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(URL).then(res => res.json());
}
