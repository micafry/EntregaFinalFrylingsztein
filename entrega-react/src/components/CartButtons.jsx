import React, { useContext, useState } from 'react'
import { Button } from "react-bootstrap";
import { CartContext } from '../context/CartContext';

const CartButtons = () => {

    const [count, setCount] = useContext(CartContext);
    const [state, setState] = useState(0);

    const addItem = () => {
        setCount(count + 1);
        setState(state + 1);

    }
    const removeItem = () => {
        setCount(count - 1);
        setState(state - 1);
    }
    return (

        <div className="d-flex align-items-center">

            <div className="d-flex w-25 flex-column">

                <Button variant="outline-secondary" className="rounded-0" onClick={removeItem}>

                    -

                </Button>
<span>{state}</span>
                {/*
                <input

                    type="text"

                    className="form-control form-control-sm text-center rounded-0"

                    placeholder="0"

                    id="valueInput"

                />
    */}

                <Button variant="outline-secondary" className="rounded-0" onClick={addItem}>

                    +

                </Button>

            </div>

            <Button className="ml-2" variant="primary">

                Agregar al Carrito

            </Button>

        </div>

    );

};



export default CartButtons;