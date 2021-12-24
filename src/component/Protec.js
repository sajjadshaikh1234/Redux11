import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Protec = (props) => {

    const Cmp = props.Cmp;
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate('/')
        }
    }, [])



return (
    <div>
  <Cmp />
</div>
)
}

export default Protec;