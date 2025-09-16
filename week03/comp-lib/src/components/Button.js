import cx from "classnames" // grab css classnames from bootstrap
import PropTypes from "prop-types"

const Button = (props) => {
    const {children, primary, secondary, warning, success, rounded, outline} = props 
    const baseClass = "flex items-center px-8 p-3 border"
    return <button className = {cx (baseClass, { // apply baseclass, then check for the following:
        "bg-blue-500 border-blue-500 text-white": primary, // these get applied if primary is true!
        "bg-gray-900 border-gray-900 text-white": secondary,
        "bg-red-600 border-red-600 text-white": warning,
        "bg-green-500 border-green-500 text-white": success,
        // outline + rounded
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary, 
        "text-gray-900": outline && secondary, 
        "text-green-500": outline && success, 
        "text-red-500": outline && warning, 
        "text-pink-500": outline && success, 
    })}>
        {children}
    </button>
}

Button.propTypes = {

    checkVariationValue: ({primary, secondary, success, warning}) => {
        const count = Number(!!primary) // !! = turn into a true (this is saying not not primary = primary true)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning);

        console.log(count)

        if (count > 1) {
            return new Error('you silly geezer! only 1 of the styling props can be true!')
        }
    }

}

export default Button