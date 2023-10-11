import { Movie, Video, MovieApiResponse } from '../../interfaces'; // Asegúrate de ajustar la ruta al archivo de interfaces

describe('Interfaces', () => {
    
  it('should correctly type a Movie object', () => {
    const movie: Movie = {
      id: 1,
      title: 'Test Movie',
      overview: 'This is a test movie',
    };

    expect(movie).toBeDefined();
    expect(movie.id).toBe(1);
    expect(movie.title).toBe('Test Movie');
    expect(movie.overview).toBe('This is a test movie');
  });

  it('should correctly type a Video object', () => {
    const video: Video = {
      key: 'abc123',
      name: 'Test Video',
    };

    expect(video).toBeDefined();
    expect(video.key).toBe('abc123');
    expect(video.name).toBe('Test Video');
  });

  it('should correctly type a MovieApiResponse object', () => {
    const movieApiResponse: MovieApiResponse = {
      results: [
        {
          id: 1,
          title: 'Movie 1',
          overview: 'Overview 1',
        },
        {
          id: 2,
          title: 'Movie 2',
          overview: 'Overview 2',
        },
      ],
    };

    expect(movieApiResponse).toBeDefined();
    expect(Array.isArray(movieApiResponse.results)).toBe(true);
    expect(movieApiResponse.results.length).toBe(2);

    const [movie1, movie2] = movieApiResponse.results;
    expect(movie1.id).toBe(1);
    expect(movie1.title).toBe('Movie 1');
    expect(movie1.overview).toBe('Overview 1');

    expect(movie2.id).toBe(2);
    expect(movie2.title).toBe('Movie 2');
    expect(movie2.overview).toBe('Overview 2');
  });
});