import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeGroup";
import { Post, DetailPost } from "../screens/PostGroup";
const Stack = createNativeStackNavigator();
const routeNameRef = React.createRef();
const navigationRef = React.createRef();
export const NavigationContext = React.createContext();
export default MainNavigation = () => {
  return (
    <NavigationContext.Provider value={navigationRef}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="DetailPost" component={DetailPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationContext.Provider>
  );
};
