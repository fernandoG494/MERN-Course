import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
    const [inputText, setInputText] = useState('');
    
    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputText.trim().length > 2){
            setCategories(cats => [inputText, ...cats]);
            setInputText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
