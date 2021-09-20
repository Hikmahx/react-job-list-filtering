import React from 'react';

const JobItem = props => {

  return (
    <li className={props.featured  ===true? 'job cyan-border': 'job'}>
      <div className={props.featured  ===true? ' cyan-border': ''}>
        <img src={props.logo} alt="banner"/>
        <div className='company'>
          <h2>{props.company}</h2>
          <span className={props.new === true ? 'cyan' : ''}>
            {props.new === true ? 'New!' : ''}
          </span>
          <span className={props.featured === true ? 'black' : ''}>
            {props.featured === true ? 'Featured' : ''}
          </span>
        </div>
        <h3>{props.position}</h3>
        <div className='details'>
          <span>{props.postedAt}</span>
          <span>{props.contract}</span>
          <span>{props.location}</span>
        </div>
        <div className='filter'>
          <button data-role={props.role}>{props.role}</button>
          <button data-level={props.level}>{props.level}</button>
           {props.languages}
          {props.tools} 
        </div>
      </div>
    </li>
  );
};

export default JobItem;
