
/** Button component
 * 
 * props: 
 *  label - str, text to be displayed on button
 *  onClick - a function to be called when the button is clicked
 * 
 * state:
 *  none
 *  
 * Boxes -> Button
 */

function Button({label, onClick}){
    return (
        <button onClick={onClick}>{label}</button>
    )
}


export default Button;