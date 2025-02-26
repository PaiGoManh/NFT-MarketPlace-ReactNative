import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;