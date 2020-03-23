import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';
import { PhotosPage, HomePage, MusicPage, ContactPage, AboutPage } from 'pages';

const Routes = (): ReactElement => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/photos" exact component={PhotosPage} />
    <Route path="/music" exact component={MusicPage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/bio" exact component={AboutPage} />
  </>
);

export default Routes;
