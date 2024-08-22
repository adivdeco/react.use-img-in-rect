import Button from './Button'

import LeftArrow from "../assets/image/leftarrow.png";
import RightArrow from "../assets/image/rightarrow.png";
import AppleBasket from './AppleBasket';

import "./applecounter.css"


function AppleCounter() {
  return (
    <section>
      <AppleBasket appleCount={10} basketName="basket 1"/>

      <Button imageUrl={LeftArrow}  title="leftarrow" />
      <Button imageUrl={RightArrow} title="rightarrow"/>
      
      <AppleBasket appleCount={0} basketName="basket 2" />
    </section>
  )
}
export default AppleCounter