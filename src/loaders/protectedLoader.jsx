import axios from 'axios';

export async function protectedLoader() {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/authentication',
  });

  api.interceptors.request.use(
    function (config) {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTM3ODU3NGI5ZTc3MDZiMjRiY2QwNWQ5MDY0YjMyNCIsIm5iZiI6MTc3ODA2NDQyOS4wNTksInN1YiI6IjY5ZmIxYzJkYTI3MjQxOTkzOTM2N2YwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cX71uOJUZ3WJje9V7-M4hnY8vA1WBfQ90cVBCE9xxxs';

      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
}
