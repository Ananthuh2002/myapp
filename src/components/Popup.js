import './Popup.css'

const Popup = (props) => {
  return (props.trigger)?(
    <div className="popup">
        <div className='popup-inner'>
     {props.children}
     <button className='close-btn'onClick={()=>props.setTrigger(false)}>close</button>
     <div className='btn'>
     <button className='close-btn2'>Not approved</button>
     </div>
        </div>
      
    </div>
  ):"";
}

export default Popup