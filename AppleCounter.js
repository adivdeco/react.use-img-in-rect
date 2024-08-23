import Button from './Button'
import LeftArrow from "../assets/image/leftarrow.png";
import RightArrow from "../assets/image/rightarrow.png";
import AppleBasket from './AppleBasket';
import "./applecounter.css"

import { createRoot } from 'react-dom/client';
// Ensure the case and path are correct

const root = createRoot(document.getElementById('root')); // Changed to getElementById





const totalApple = 10
let rightApplecount = 0
let leftApplecount = totalApple - rightApplecount

function AppleCounter() {

  const leftClick = () => {
    if (rightApplecount > 0) {
      rightApplecount--
    leftApplecount++
    root.render( <AppleCounter/>);
    }

  }

  const rightClick = () => {
   if (leftApplecount > 0) {
    rightApplecount++
    leftApplecount--
    root.render( <AppleCounter/>);
   }
    console.log(("left"),leftApplecount)
    console.log(("right"),rightApplecount)
  }

  return (
    <>
      <section>
        <AppleBasket appleCount={leftApplecount} basketName="basket 1" />

        <Button imageUrl={LeftArrow} title="leftarrow" click={leftClick} />
        <Button imageUrl={RightArrow} title="rightarrow" click={rightClick} />

        <AppleBasket appleCount={rightApplecount} basketName="basket 2" />
      </section>
      {/* <p
        style={{
          textAlign: 'center',
          margintop: "32px",

        }}>                       
        <button style={{    
          width: "10vw",
          height: "2vw",                   //eska to use nhi hua n  (button) , esko use kea the ham re-render krn time ep11
                                           //last lapp
        }} onClick={() => {
          
        }}>
          Re-Render
        </button>
      </p> */}
    </>
  )
}
export default AppleCounter