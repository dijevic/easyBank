import React from 'react'

export const TextArea = ({ styles, name, value, handleInputChange }) => {
    return (
        <textarea
            name={name}
            value={value}
            onChange={handleInputChange}
            className={styles.textArea}
            maxLength="50"
            minLength="3"
            required={true}


        ></textarea>
    )
}
