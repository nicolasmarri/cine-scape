import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MovieCard } from '../../components';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MovieCard Component', () => {
    it('displays the correct movie title', () => {
        const mockMovie = {
            id: 12345,
            title: 'Interstellar',
            overview: 'A team of explorers travel through a wormhole in space...'
        };

        const imagePath = 'path/to/image.jpg';

        const { getByText } = render(
            <Router>
                <MovieCard movie={mockMovie} imagePath={imagePath} />
            </Router>
        );

        expect(getByText('Interstellar')).toBeInTheDocument();
    });
});