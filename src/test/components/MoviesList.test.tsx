import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MoviesList } from '../../components';
import { Movie } from '../../interfaces';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MoviesList Component', () => {
    it('renders only movies with a poster_path using the MovieCard component', () => {
        const mockMovies: Movie[] = [
            { id: 1, title: 'Interstellar', overview: 'Description...', poster_path: 'path1.jpg' },
            { id: 2, title: 'Inception', overview: 'Description...' }, 
            { id: 3, title: 'The Dark Knight', overview: 'Description...', poster_path: 'path3.jpg' },
        ];
        
        const { getByText, queryByText } = render(
            <Router>
                <MoviesList movies={mockMovies} />
            </Router>
        );

        expect(getByText('Interstellar')).toBeInTheDocument();
        expect(getByText('The Dark Knight')).toBeInTheDocument();
        expect(queryByText('Inception')).not.toBeInTheDocument();
    });

});