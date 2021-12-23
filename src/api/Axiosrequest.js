import axios from 'axios'


export async function axiosRequest(url, method, headers, params) {

  return params
    ? axios({
      url: url,
      method: method,
      headers: headers,
      data: params,
      timeout: 1000,
    })
    : axios({
      url: url,
      method: method,
      headers: headers,
      data: {},
      timeout: 1000,
    });
}

const GetApi = () => {

  const headers = {
    'Content-Type': 'application/json',
  };

  return axiosRequest("http://localhost:3000/details", "GET", headers, {})
}


const PostApi = (request) => {

  const headers = {
    'Content-Type': 'application/json',
  };

  return axiosRequest(
    'http://localhost:3000/details',
    'POST',
    headers,
    request
  );
};


const UpdateApi = (data, id) => {

  const headers = {
    'Content-Type': 'application/json',
  };

  return axiosRequest(
    'http://localhost:3000/details/' + id,
    'PUT',
    headers,
    data
  );
};

const GetDetailApiById = (id) => {

  const headers = {
    'Content-Type': 'application/json',
  };

  return axiosRequest(
    'http://localhost:3000/details/' + id,
    'GET',
    headers,
    {}
  );
};

const DeleteApplication = (id) => {

  console.log(">>>>>>>>", id)
  const headers = {
    'Content-Type': 'application/json'
  }

  return axiosRequest(

    'http://localhost:3000/details/' + id,
    'DELETE',
    headers,
    {}
  )
}


export { GetApi, PostApi, GetDetailApiById, UpdateApi, DeleteApplication };