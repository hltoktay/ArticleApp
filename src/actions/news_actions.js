import axios from "axios";

// https://plantapp-ba72f.firebaseio.com/

export function getNews() {
  const request = axios({
    method: "GET",
    url: "https://plantapp-ba72f.firebaseio.com/news.json"
  })
    .then(response => {
      const articles = [];

      for (let key in response.data) {
        articles.push({
          ...response.data[key],
          id: key
        });
      }
      console.log(response.data);
      return articles;
    })
    .catch(e => {
      return false;
    });

  return {
    type: "GET_NEWS",
    paylaod: request
  };
}
