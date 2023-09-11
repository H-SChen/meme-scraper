import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

axios
  .get(url)
  .then(function (response) {
    // handle success
    const html = response.data;
    const $ = cheerio.load(html);
    const imgArr = [];

    $('img', html).each((i, element) => {
      if (i < 10) {
        const imgUrl = $(element).attr('src');
        imgArr.push(imgUrl);
      }
    });
    console.log(imgArr);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
