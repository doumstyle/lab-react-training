import React from 'react';

const Greetings = (props) => {

    const { lang, children } = props;

  return (
    <div className='box'>
        {lang === "de" && (
            <p className='title is-4'>Hallo {children}</p>
        )}
        {lang === "fr" && (
            <p className="title is-4">Bonjour {children}</p>
        )}
        {lang === "en" && (
            <p className="title is-4">Hello {children}</p>
        )}
        {lang === "es" && (
            <p className="title is-4">Hola {children}</p>
        )}
    </div>
  );
};

export default Greetings;
