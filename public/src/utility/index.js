import io from 'socket.io-client';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

const parseData = (response) => {
  const wasSuccessful = response.ok;
  const result = response.json();
  if(wasSuccessful) {
      return result;
  }
  return result.then(err => Promise.rejct(err));
}

const headers = new Headers()

headers.append('Content-Type', 'application/json');


const getRequest = url => new Request(url, {method: 'GET'});

const postRequest = (url, obj) =>{
  const body = JSON.stringify(obj);
  return new Request(url, {
    method: 'POST',
    body,
    headers
  });
}
export const fetchPost = (url, body) => 
  fetch(postRequest(url, body))
  .then(parseData);

export const fetchGet = url => fetch(getRequest(url)).then(parseData);