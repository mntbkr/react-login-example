// @flow
import React, { Component, Children } from 'react';

import PropTypes from 'prop-types';

class If extends Component {

	static propTypes = {
		condition: PropTypes.any.isRequired
	}

	render()
	{
		const {children, condition} = this.props

		if( condition  )
		{
			//if we have only one child component just return it
			if( Children.count(children) === 1 )
			{
				return Children.only(children)
			}

			return <div className="conditional">{children}</div>
		}

		return null
	}
}

class Unless extends Component {

	static propTypes = {
		condition: PropTypes.any.isRequired
	}

	render()
	{
		const {children, condition} = this.props

		if( ! condition )
		{
			//if we have only one child component just return it
			if( Children.count(children) === 1 )
			{
				return Children.only(children)
			}

			return <div className="conditional">{children}</div>
		}

		return null
	}
}

export {
	If,
	Unless
}
