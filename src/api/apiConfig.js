const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7e0b59c233535ae31cb7dcec01ba036d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;