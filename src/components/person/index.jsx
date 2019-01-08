import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ image, quote, name, byline }) => (
  <section className="person">
    <Constraint>
      <header className="person__header">
        <div className="person__portrait-container">
          {image && (
            <img
              src={image}
              alt={`Portrait ${name}`}
              className="person__portrait"
            />
          )}
        </div>
        <blockquote className="person__quote">
          <p className="person__quote-content">{quote}</p>
        </blockquote>
      </header>

      <p className="person__byline">
        <span className="person__name-container">
          <span className="person__name">{name}</span>
        </span>
        <span className="person__byline-content">{byline}</span>
      </p>
    </Constraint>
  </section>
);