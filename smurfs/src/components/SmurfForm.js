import React, {useState, useReducer} from "react";
import { rootReducer, initialState } from "../reducers";

const SmurfForm = () => {

    const [state, dispatch] = useReducer(rootReducer, initialState);


    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const submitSmurf = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {
                name: name,
                age: age,
                height: height,
                id: Date.now()
            }
        });
        setName("");
        setAge("");
        setHeight("");
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Smurf name"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Smurf age"
                    value={age}
                    onChange={({ target }) => setAge(target.value)}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="Smurf height (cm)"
                    value={height}
                    onChange={({ target }) => setHeight(target.value)}
                />
                <button type="submit" onClick={submitSmurf}>Add Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;