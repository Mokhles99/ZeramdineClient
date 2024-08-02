import React, { createContext, useState } from 'react';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
    const [catalog, setCatalog] = useState("manuel");
    const [catalogName, setCatalogName] = useState("OUTILS MANUELS");

    return (
        <CatalogContext.Provider value={{ catalog, setCatalog, catalogName, setCatalogName }}>
            {children}
        </CatalogContext.Provider>
    );
};

export default CatalogContext;
