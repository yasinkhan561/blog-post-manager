import React from 'react'
import ThemeProviderContext from './contexts/ThemeProviderContext';
import PostManager from './components/postManager/PostManager';
import GlobalStyle from './theme/GlobalStyle';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProviderContext>
        <PostManager  />
      </ThemeProviderContext>
    </>
  );
};



export default App;



