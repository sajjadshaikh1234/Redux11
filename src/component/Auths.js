import React, { useState } from 'react' 
import Counter from './Counter';

const Auths = (props) => {
    const [increase,setIncrease] = useState(0);

    const increment  = () => {
        setIncrease(increase+1)
    }



    return(   
        <div>
           {increase} 
<Counter value={increment} />
        </div>
    )
}

export default Auths;