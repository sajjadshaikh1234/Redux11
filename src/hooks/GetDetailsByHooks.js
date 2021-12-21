import React, { useState, useEffect } from 'react';
import { GetDetailApiById } from "../api/Axiosrequest";

export default (props) => {

    const [detalibyId, setDetailById] = useState({});

    const GetDetailByHooks = (requestId) => {
        console.log("request", requestId)

        return GetDetailApiById(requestId).then((result) => {
            // console.log("result data is", result);
            setDetailById(result)
            // console.log("res" , result)
        });
    };

    useEffect(() => {
        GetDetailByHooks(props)
    }, [])
    return [detalibyId];
}
