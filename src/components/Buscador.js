import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

export const Buscador = () => {

  const navigate = useNavigate();
  let token = sessionStorage.getItem('token');

  const handleSubmit = e => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if(keyword.length < 2){
      swAlert(<h4>Please write a movie to find</h4>)
    }else {
      e.currentTarget.keyword.value = '';
      navigate(`/results?keyword=${keyword}`);
    }

    console.log(keyword);
  }

  return (
    <>
    { token && 
    <form className="form-search" onSubmit={handleSubmit}>
      <label className="form-label mb-0 input-group-sm">
        <input className="form-control" type="text" name="keyword" placeholder="Search a movie here"/>
      </label>
      <button type="submit" className="btn btn btn-outline-light btn-sm">Search</button>
    </form>
    }
    </>
  )
}
