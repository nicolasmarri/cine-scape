import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('Footer Component', () => {
    it('displays the correct copyright text', () => {
        const { getByText } = render(<Footer />);
        
        expect(getByText('CineScape © | Pablo Nicolas Marri')).toBeInTheDocument();
    });
});