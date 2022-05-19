import React, { useState } from 'react';

const GlobalDataContext = React.createContext([{}, (_value) => { }]);

const GlobalDataProvider = (props) => {
    const [global_data, set_global_data] = useState({});
    return <GlobalDataContext.Provider value={[global_data, set_global_data]}>
        {props.children}
    </GlobalDataContext.Provider>
}

export { GlobalDataContext, GlobalDataProvider }