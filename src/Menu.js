import React from 'react'

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>Вода закипит.</p>;
	}
	return <p>Вода не закипит.</p>;
}


class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temperature: ''};
	}

	handleChange(e) {
		this.setState({temperature: e.target.value});
	}

	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>Введите температуру в градусах Цельсия:</legend>
				<input
					value={temperature}
					onChange={this.handleChange} />
				<BoilingVerdict
					celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}

export default Calculator;



/*class Menu1 extends React.Component {

	render () {
		const props = this.props;

		return (
			<div>
				<h1>{props.title}</h1>
			</div>
		)
	}
}

const Menu2 = ({title}) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	)
}

export {
	Menu2,
	Menu1
}*/





//вывести список дел (map), в app массив конст, return на мапе, выводим todo

//item подставить