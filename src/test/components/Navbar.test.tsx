import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../components'; 

describe('Navbar Component', () => {
    const mockSetSearchKey = jest.fn();
    const mockSearchMovies = jest.fn();

    beforeEach(() => {
        render(
            <Navbar
                searchKey=""
                setSearchKey={mockSetSearchKey}
                searchMovies={mockSearchMovies}
            />
        );
    });

    it('renders the brand name CineScape', () => {
        expect(screen.getByText('CineScape')).toBeInTheDocument();
    });

    it('updates the search input when a user types', () => {
        const input = screen.getByPlaceholderText('Search your movie...');

        fireEvent.change(input, { target: { value: 'Interstellar' } });

        expect(mockSetSearchKey).toHaveBeenCalledWith('Interstellar');
    });

    it('calls the searchMovies function when the form is submitted', () => {
        const form = screen.getByTestId('navbar-form')

        fireEvent.submit(form);

        expect(mockSearchMovies).toHaveBeenCalled();
    });
});
