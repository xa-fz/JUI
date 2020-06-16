import React, { useState, Context, ReactElement, Component } from "react";

const ComponentsContext: Context<[any, React.Dispatch<React.SetStateAction<any>>]> = React.createContext<[any, React.Dispatch<React.SetStateAction<any>>]>([{}, (_value: any) => { }]);

const ComponentsProvider: (props: any) => ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null = (props: any): ReactElement<any, string | (new (props: any) => Component<any, any, any>)> | null => {
    const [child_component, set_child_component]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(<span></span>);
    return (
        <ComponentsContext.Provider value={[child_component, set_child_component]}>
            {props.children}
        </ComponentsContext.Provider>
    )
}

export { ComponentsContext, ComponentsProvider };