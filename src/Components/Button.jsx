
import classNames from 'classnames';

const Button = ({children,className}) => {
    
    let btnClass = null



      btnClass = classNames(className ?? 'grey square')
       
  console.log(btnClass)

 
  return (
    <button className={btnClass} >{children}</button>
  )
}

export default Button