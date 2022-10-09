import React from 'react'

export const Input = ({ styles, value, name, handleInputChange }) => {
    return (
        <input
            className={styles.input}
            type="text"
            name={name}
            value={value}
            onChange={handleInputChange}
            maxLength="50"
            minLength="3"

        />
    )
}
