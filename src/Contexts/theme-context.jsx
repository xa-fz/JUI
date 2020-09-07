import React, { useState } from 'react';

export const themes = {
    dark_pink: {
      background: '#8B008B'
    },
    blue: {
      background: '#1890FF'
    },
  };
  
  const ThemeContext = React.createContext(
    themes.blue // 默认值
  );

  const ThemeProvider = (props) => {
    const [theme, set_tehem] = useState('');
    return <ThemeContext.Provider value={[theme, set_tehem]}>
        {props.children}
    </ThemeContext.Provider>
  }

  export default { ThemeContext, ThemeProvider }