import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MovieOverview } from '../../components';
import { Movie } from '../../interfaces';

describe('MovieOverview Component', () => {
  const mockMovie: Movie = {
    id: 123,
    title: 'Interstellar',
    overview: 'A group of astronauts travel through a wormhole...'
  };

  let onPlayTrailerMock: jest.Mock;
  let onNavigateHomeMock: jest.Mock;

  beforeEach(() => {
    onPlayTrailerMock = jest.fn();
    onNavigateHomeMock = jest.fn();

    render(<MovieOverview movie={mockMovie} onPlayTrailer={onPlayTrailerMock} onNavigateHome={onNavigateHomeMock} />);
  });

  it('renders the movie title and overview', () => {
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
    expect(screen.getByText('A group of astronauts travel through a wormhole...')).toBeInTheDocument();
  });

  it('calls onPlayTrailer callback when Play Trailer button is clicked', () => {
    fireEvent.click(screen.getByText('Play Trailer'));
    expect(onPlayTrailerMock).toHaveBeenCalledTimes(1);
  });

  it('calls onNavigateHome callback when Go to Home button is clicked', () => {
    fireEvent.click(screen.getByText('Go to Home'));
    expect(onNavigateHomeMock).toHaveBeenCalledTimes(1);
  });
});
