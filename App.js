import RootNavigation from "./navigation/RootNavigation";
import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-native-paper";
import { UserContextProvider } from "./screans/user/authcontext";
import {ProductContextProvider} from "./screans/product/productcontext";
import { CategoryContextProvider } from "./screans/category/categorycontext";
function App() {
  return (
    <Provider>
      <UserContextProvider>
        <CategoryContextProvider>
        <ProductContextProvider>
          <RootNavigation />
          </ProductContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;
