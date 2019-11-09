import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';
import '../setupTests';

describe('Gift', () => {
	const mockRemoveGift = jest.fn();
	const id = 1;
	const props = { gift: { id }, removeGift: mockRemoveGift };
	const gift = shallow(<Gift {...props}></Gift>);

	it('renders correctly', () => {
		expect(gift).toMatchSnapshot();
	});

	it('initializes the `state` with a person and a present', () => {
		expect(gift.state()).toEqual({ person: '', present: '' });
	});

	describe('when typing into the person input', () => {
		const personString = 'Uncle';

		beforeEach(() => {
			gift
				.find('.input-person')
				.simulate('change', { target: { value: personString } });
		});

		it('updates the person in the `state`', () => {
			expect(gift.state().person).toEqual(personString);
		});
	});

	describe('when typing into the present input', () => {
		const presentString = 'Golf Clubs';

		beforeEach(() => {
			gift
				.find('.input-present')
				.simulate('change', { target: { value: presentString } });
		});

		it('updates the present in the `state`', () => {
			expect(gift.state().present).toEqual(presentString);
		});
	});

	describe('when clicking the `Remove Gift` button', () => {
		beforeEach(() => {
			gift.find('.btn-remove').simulate('click');
		});

		it('it calls the removeGift callback', () => {
			expect(mockRemoveGift).toHaveBeenCalledWith(id);
		});
	});
});
