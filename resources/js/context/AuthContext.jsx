import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const AuthContext = createContext();

// export default  AuthContext ;

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
  };
  
function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState('');
    const [productSale, setProductSale] = useState('');
    return(
        <AuthContext.Provider value={{currentUser, setCurrentUser, productSale, setProductSale}}>
            {children}
        </AuthContext.Provider>
    )
}

// const useAuth = () => {
//     const context = React.useContext(AuthContext);
  
//     if (context === undefined) {
//       throw new Error(`useAuth must be used within a AuthProvider`);
//     }
  
  
  
//     return  context;
//   }
export default { AuthProvider, AuthContext };