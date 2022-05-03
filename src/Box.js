
/** Box component
 * 
 * props:
 *  color: string of a valid css color
 * 
 * no state
 * 
 * Boxes -> Box
 */

function Box({color}) {
  const style = {
    backgroundColor: color,
    height: "100px",
    width: "100px",
    margin: "10px",
  };

  return (
    <div className="Box" style={style}></div>
  )
}

export default Box;