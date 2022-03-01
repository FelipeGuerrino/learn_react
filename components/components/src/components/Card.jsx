import { useState } from "react";
import Button from "./Button";

const Card = () => {

    const [value, setValue] = useState(0)

    function Add (){
        setValue(value + 1)
    }

    function Subtract (){
        setValue(value - 1)
    }

    return (
            <div className="card">
                <div className="card-header">
                    Header
                </div>
                <div className="card-body">
                    <p>Body content</p>
                    <Button 
                    className="btn btn-success"
                    onClick={Add}>
                        Add
                    </Button>
                    <Button 
                    className="btn btn-danger"
                    onClick={Subtract}>
                        Remove
                    </Button>
                    <p>{value}</p>
                </div>
            </div>
    )
}

export default Card;