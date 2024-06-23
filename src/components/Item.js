import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, completed, text, onDelete, number }) => (
  <li className={'item'}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={() => onDelete}>Delete</button>
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item