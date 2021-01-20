import RootNavigation from "./navigation/RootNavigation";
import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-native-paper";
import { UserContextProvider } from "./screans/user/authcontext";
import { CategoryContextProvider } from "./screans/category/categorycontext";
function App() {
  return (
    <Provider>
      <UserContextProvider>
        <CategoryContextProvider>
          <RootNavigation />
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;
