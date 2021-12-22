import { GET_DETAIL, POST_DETAIL, UPDATE_DETAIL, DELETE_DETAIL } from "../Constant";
import { GetApi, PostApi, GetDetailApi, UpdateApi, DeleteApplication } from '../../api/Axiosrequest'


const GetApide = () => {
  return function (dispatch) {
    return GetApi().then((res) => {
      // console.log("Api ", res);
      dispatch({
        type: GET_DETAIL,
        payload: res.data,
      })
    })
  }


}


const PostApide = (request) => {
  // console.log('Request is _______________', request);
  return function (dispatch) {
    dispatch({
      type: POST_DETAIL,
      payload: false,
    });
    return PostApi(request).then((res) => {
      // console.log('Response Data is __________', res);
      dispatch({
        type: POST_DETAIL,
        payload: true,
      });
    });
  };
};


const UpdatdatApide = (request, id) => {
  console.log("request", request)
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAIL,
      payload: false,
    })
    return UpdateApi(request, id).then((res) => {
      console.log("res", res)
      dispatch({
        type: UPDATE_DETAIL,
        payload: true,
      })
    })
  }
}


// const DeleteDEtail = (id) => {
//   console.log(id)
//   return function (dispatch) {
//     dispatch({
// type:DELETE_DETAIL,
// payload:false
//     })
//     return DeleteApplication(id).then((res) => {
//       console.log("res", res)
//       dispatch({
//         type:DELETE_DETAIL,
//         payload:true
//       })
//     })
//   }
// }


const DeleteDEtail = (id) => {
  console.log("id",id)
  return function (dispatch) {
    dispatch ({
      type :DELETE_DETAIL,
      payload:false
        })
        return DeleteApplication(id) .then((res)=> {
  console.log("res", res)
  dispatch({
    type : DELETE_DETAIL,
    payload: true
  })
        })
  }
  
}



export { GetApide, PostApide, UpdatdatApide, DeleteDEtail};



