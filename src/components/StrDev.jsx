import React from 'react'
import Typed from 'typed.js';


function StrDev() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Javascript','React'],
        typeSpeed: 150,
        backSpeed:50,
        loop:true,
        
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
      <div >
        <span ref={el} />
      </div>
    );
  }

export default StrDev