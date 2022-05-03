import { useState } from "react";

/** EightBall component
 * 
 * props:
 *  answers: [{msg: "yes", color: "green"}, ...]
 * state:
 *  answer: {msg: "yes", color: "green"}
 *  count: object counting the frequency of answer colors
 *      {green: 1, red: 2, ...}
 * 
 * App -> EightBall
 */

function EightBall({answers}){
    //gotta destructure or access as props.answers!

    const initialAnswer = {msg: "shake me" , color: "black"}
    const initialCount = {goldenrod: 0, red: 0, green: 0};

    const [answer, setAnswer] = useState(initialAnswer);
    const [count, setCount] = useState(initialCount);

    function pickAnswer(event){
        const idx = Math.floor(Math.random()*answers.length);
        console.log("inside pickAnswer, idx:", idx);
        console.log("inside pickAnswer, answers[idx]:", answers[idx]);
        const newAnswer = answers[idx];
        setAnswer(newAnswer);
        setCount(count => ({...count, [newAnswer.color]: count[newAnswer.color]+1}));
       //og was answer.color, but this created a lag in the count
       //answer referred to the state before the click, not updated until
       //leaving this fn
    }

    function resetBoth(event){
        setCount(initialCount);
        setAnswer(initialAnswer);
    }


    return (
        <div className="EightBall" style={{display: 'flex', flexDirection: 'column'}}>
            <button style={{backgroundColor: answer.color, borderRadius: '50%', width: '200px', color: 'white', height: '200px'}} onClick={pickAnswer}>
                {answer.msg}
            </button>
            <button onClick={resetBoth}>
                Reset your future!
            </button>
            <div>
                {
                    Object.keys(count).map(color => {
                        return (<p key={color}>{color} : {count[color]}</p>);
                    })
                }
            </div>

        </div>
    )

}




export default EightBall;