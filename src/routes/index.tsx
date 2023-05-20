import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  HomeScreen,
  DrawerScreen,
  CityDropDownList,
  StationList,
  StationDashboard,
  NearestMetro,
  GeneralInfo,
  OnlineRecharge,
  FirstLastMetro,
  FareAndRoute,
} from '../screens';
import {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {setLocation} from '../redux-toolkit/reducers/metroSlice';

const HomeStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Splash">
      <HomeStack.Group>
        <HomeStack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
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
            animation: 'fade_from_bottom',
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
        <HomeStack.Screen
          name="NearestMetro"
          component={NearestMetro}
          options={{
            headerTitle: 'Nearest Metro',
          }}
        />
        <HomeStack.Screen
          name="GeneralInfo"
          component={GeneralInfo}
          options={{
            headerTitle: 'General Information',
          }}
        />
        <HomeStack.Screen
          name="OnlineRecharge"
          component={OnlineRecharge}
          options={{
            headerTitle: 'Online Recharge',
          }}
        />
        <HomeStack.Screen
          name="FirstLastMetro"
          component={FirstLastMetro}
          options={{
            headerTitle: 'First & Last Metro',
          }}
        />
        <HomeStack.Screen
          name="FareAndRoute"
          component={FareAndRoute}
          options={{
            headerTitle: 'First & Last Metro',
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      dispatch(
        setLocation({lat: info.coords.latitude, long: info.coords.longitude}),
      ),
    );
  }, []);
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
