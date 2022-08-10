import React from "react";

export default function Card({name,img, temperaments, wMin, wMax, created }) {
  return (
    <div className='content'>
      <img className='img'src={img} alt={name} />
      <h3 className="info">{name.toUpperCase()}</h3>
      {/* <h3>Temperament: {id<200?temperaments:temperaments.map(temperament=> <span>{temperament.name} </span>)}</h3> */}
      <p className="info">Temperament: <br />{!created?temperaments:temperaments.map(temperament=> <span>{temperament.name}, </span>)}</p>
      <p className="info">{wMin}Kg - {wMax}Kg</p>
    </div>
  );
  }

