import React from 'react';
import ReactDOM from 'react-dom';
import Page from 'components/Page';

//Page component contains app routing between pages
export const App : React.FC = ()=> <Page/>

ReactDOM.render(<App/>, document.body)