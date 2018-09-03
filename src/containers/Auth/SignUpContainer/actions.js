import axios from 'axios';
import API from '../../../api.js';
import { logIn } from '../SignInContainer/actions.js';
import { REMOVE_CURRENT_USER } from '../constants';
import { push } from 'react-router-redux';

export function register({name, email, password}) {
  const params = {"user": {name, email, password}}
  const request = API.post('/users', params);

  return (dispatch) => {
    request.then(
      resp => {
        dispatch(logIn({email, password}))
      },
      error => {
        window.Materialize.toast('Email or password invalid', 4000, 'red')
      }
    );
  };
}

export function logOut() {
	localStorage.removeItem('jwt');

	return (dispatch) => {
		dispatch({ type: REMOVE_CURRENT_USER })
		dispatch(push('/'));
	};
}
