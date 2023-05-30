export function FetchImages(page, query) {
  const API_KEY = '34332611-52435d07ae30b60a07e51363a';

  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
}
