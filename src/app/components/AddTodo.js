import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions'

const AddToDo = (props) => {
    const [input, setInput] = useState('');

    const updateInput = (input) => {
        setInput(input);
    }

    const handleAddToDo = () => {
        props.addTodo(input)
        setInput('')
    }
    return (
        <div>
            <input onChange={(e) => updateInput(e.target.value) } />
            <button className="add-todo" onClick={() => handleAddToDo()}>Add Todo</button>
        </div>
    )
}

export default connect(null, {addTodo})(AddToDo);