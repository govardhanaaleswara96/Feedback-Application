import React from 'react'
import PropTypes from 'prop-types'

function Button({children,version='primary',type='button',isDisabled=false }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}  >
        {children}
    </button>
  )
}

Button.propTypes = {

}

export default Button

