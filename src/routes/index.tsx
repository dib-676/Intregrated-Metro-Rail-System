import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  DrawerScreen,
  CityDropDownList,
  StationList,
  StationDashboard,
} from '../screens';

const HomeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Group>
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Group>
      <HomeStack.Group>
        <HomeStack.Screen
          name="StartScreenDrawer"
          component={DrawerScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
            
          }}
        />
        <HomeStack.Screen
          name="CityDropDownList"
          component={CityDropDownList}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
          }}
        />
        <HomeStack.Screen
          name="StationList"
          component={StationList}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}
        />
        <HomeStack.Screen
          name="StationDashboard"
          component={StationDashboard}
          options={{
            headerShown: false,
            animation: 'simple_push',
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreenStack}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
