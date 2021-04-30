import RootNavigation from "./navigation/RootNavigation";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-native-paper";
import { UserContextProvider } from "./screans/user/authcontext";
import { ProductContextProvider } from "./screans/product/productcontext";
import { CategoryContextProvider } from "./screans/category/categorycontext";
import { CartContextProvider } from "./screans/cart/cartcontext";
import * as PusherPushNotifications from "@pusher/push-notifications-web";

window.navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
  console.log(serviceWorkerRegistration);
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: "f3a8ef03-ae7a-427f-aa96-8521bd4c33dd",
    serviceWorkerRegistration: serviceWorkerRegistration,
  });

  beamsClient
    .start()
    .then(() => beamsClient.getDeviceId())
    .then((deviceId) => {
      console.log(deviceId); // Will log something like web-1234-1234-1234-1234
    })
    .then(() => beamsClient.addDeviceInterest("user"))
    .then(() =>
      beamsClient.getDeviceInterests().then((interests) => {
        console.log(interests); // Will log something like ["a", "b", "c"]
      })
    )
    .catch((e) => console.error("Could not get device id", e));
});

// const beamsClient = new PusherPushNotifications.Client({
//   instanceId: "f3a8ef03-ae7a-427f-aa96-8521bd4c33dd",
// });

function App() {
  return (
    <Provider>
      <UserContextProvider>
        <CategoryContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <RootNavigation />
            </CartContextProvider>
          </ProductContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;
