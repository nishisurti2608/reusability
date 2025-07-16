
import classNames from 'classnames';

const Button = ({children,className}) => {
     let btnClass = null
if(className){
     btnClass = classNames(className)
}
   else {
       btnClass = classNames('grey square')
   }
 
  return (
    <button className={btnClass} >{children}</button>
  )
}

export default Button