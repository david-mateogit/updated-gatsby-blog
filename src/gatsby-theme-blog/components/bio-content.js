import React, { Fragment } from 'react';
import { Styled } from 'theme-ui';

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Welcome to my blog. My name is{' '}
    <Styled.a href="https://twitter.com/Silenux">David Mateo</Styled.a>
    {` `}
    .
    <br />
    A developer from 🇩🇴.
    <br />
    Feel free to get in touch.
  </Fragment>
);
