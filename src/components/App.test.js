import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../setupTests';

describe('App', () => {
	const app = shallow(<App></App>);

	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});

	it('initializes the `state` with an empty list of gifts', () => {
		expect(app.state().gifts).toEqual([]);
	});

	describe('when clicking the `add new` button', () => {
		const id = 1;

		beforeEach(() => {
			app.find('.btn-add').simulate('click');
		});

		afterEach(() => {
			app.setState({ gifts: [] });
		});

		it('adds a new gift to `state` when clicking add gift button', () => {
			expect(app.state().gifts).toEqual([{ id }]);
		});

		it('adds a new gift to the rendered list', () => {
			expect(app.find('.gift-list').children().length).toEqual(1);
		});

		it('creates a gift component', () => {
			expect(
				app
					.find('.gift-list')
					.find('Gift')
					.exists()
			).toBe(true);
		});

		describe('the user wants to remove the added gift', () => {
			beforeEach(() => {
				app.instance().removeGift(id);
			});

			it('removes the gift from `state`', () => {
				expect(app.state().gifts).toEqual([]);
			});
		});
	});
});
