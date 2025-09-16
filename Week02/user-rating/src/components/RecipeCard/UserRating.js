import {useState} from 'react'
import { ReactComponent as Favorite } from '@material-design-icons/svg/filled/favorite.svg';
import './UserRating.css'

const UserRating = () => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);

    const handlePlusClick = () => {
        if (count >= 5) return;
        setCount(count + 1);
    };
    
    const handleMinusClick = () => {
        if (count <= 0) return;
        setCount(count - 1);
    };

const toggleClick = () => {
    setVisible(v => !v);
}

const toggleText = () => {
    return visible ? 'close rating' : 'open rating'; // if visible, show "close" option
}

    return (
        <>
        <div className = "user_rating" style = {{display: visible ? "flex" : "none" }}>
            <div className = "rating_header">
                <h2> Enjoyed the recipe? </h2>
                <p> Leave a review! </p>
            </div>
            <div className = "rating_interface">
                <div className = "rating_btns">
                    Your rating: {count}/5
                    <button onClick = { handleMinusClick } > ⬇️ </button>
                    <button onClick = { handlePlusClick } > ⬆️ </button>
                </div>
            </div>

            <div className = "total_hearts">
                {[...Array(count)].map((heart, index) => {
                    return (
                        <span key = {index}>
                            <Favorite />
                        </span> )
                })
                }
            </div>
        </div>
        <button className = "rating_toggle" onClick = {toggleClick} >
            {toggleText()}
        </button>
        </ >
    )
}

export default UserRating