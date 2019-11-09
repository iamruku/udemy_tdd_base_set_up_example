import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends React.Component {
	state = { gifts: [] };

	renderGifts = () =>
		this.state.gifts.map((gift, index) => (
			<Gift key={index} gift={gift} removeGift={this.removeGift}></Gift>
		));

	addGift = () => {
		this.setState({
			gifts: [
				...this.state.gifts,
				{
					id: max_number(this.state.gifts.map(gift => gift.id)) + 1
				}
			]
		});
	};

	removeGift = id => {
		const gifts = this.state.gifts.filter(gift => gift.id !== id);
		this.setState({ gifts });
	};

	render() {
		return (
			<div>
				<h2>Gift Giver</h2>
				<div className="gift-list">{this.renderGifts()}</div>
				<Button className="btn-add" onClick={this.addGift}>
					Add Gift
				</Button>
			</div>
		);
	}
}

export default App;
