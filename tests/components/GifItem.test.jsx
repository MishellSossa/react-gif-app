import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Test Suite for Gif Item', () => {
    test('should match the snapshot', () => {
        const props = {
            url: 'someurl.com',
            title: 'some title',
        };
        const container  = render(<GifItem {...props} />);
        expect(container).toMatchSnapshot();
    });
});
