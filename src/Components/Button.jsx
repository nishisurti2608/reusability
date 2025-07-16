
import classNames from 'classnames';

const Button = ({children,className}) => {
    
    let btnClass = null
    let defaultclassName = "grey square"

 if(className===undefined){
   btnClass = classNames(defaultclassName)
 }
   else {
      btnClass = classNames(className)
       
   }

 
  return (
    <button className={btnClass} >{children}</button>
  )
}

export default Button