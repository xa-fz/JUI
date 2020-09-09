import React, { useState } from 'react';
  
  const ThemeContext = React.createContext([{}, (_value) => { }]);

  const ThemeProvider = (props) => {
    const [theme, set_theme] = useState({name: 'blue', value: '#1890FF'});
    return <ThemeContext.Provider value={[theme, set_theme]}>
        {props.children}
    </ThemeContext.Provider>
  }

  export { ThemeContext, ThemeProvider }