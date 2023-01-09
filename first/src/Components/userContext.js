import React from "react";

const UserContext = React.createContext('Codevolution')
// 'Codevolution' is the default value when its not provided
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer} 
export default UserContext
