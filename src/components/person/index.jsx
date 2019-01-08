import React from 'react';

import Constraint from '../constraint';

import './style.scss';

export default ({ quote, name, byline }) => (
  <section className="person">
    <Constraint>
      <header className="person__header">
        <div className="person__portrait" />
        <blockquote className="person__quote">{quote}</blockquote>
      </header>

      <p className="person__byline">
        <span className="person__name">{name}</span> {byline}
      </p>
    </Constraint>
  </section>
);
