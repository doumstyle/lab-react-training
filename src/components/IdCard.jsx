import React from 'react';

const IdCard = (props) => {
    
    const { birth, firstName, gender, height, lastName, picture } = props;
  return (
    <div className='box'>
        <article className='media'>
            <div className="media-left">
                <figure className='image'>
                    <img src={picture} alt={firstName} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p><strong>First name: </strong>{firstName}</p>
                    <p><strong>Last name: </strong>{lastName}</p>
                    <p><strong>Gender: </strong>{gender}</p>
                    <p><strong>Height: </strong>{height / 100}m</p>
                    <p><strong>Birth: </strong>{birth.toLocaleDateString()}</p>
                </div>
            </div>
        </article>

    </div>
  );
};

export default IdCard;
