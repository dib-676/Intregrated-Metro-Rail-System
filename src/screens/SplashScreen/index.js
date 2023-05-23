import {ImageBackground} from 'react-native';
import {images} from '../../utils';
import style from './style';
// import BackgroundTimer from 'react-native-background-timer';
import {useEffect, useState} from 'react';
import BackgroundTimer from '../../utils/backgroundTimer';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {setLocation} from '../../redux-toolkit/reducers/metroSlice';
import {getNearestStations} from '../NearestMetro/NMResolver';

const SplashScreen = ({navigation}: any) => {
  const [seconds, setSeconds] = useState(0);
  getNearestStations();
  useEffect(() => {
    const acc_interval = BackgroundTimer.setInterval(() => {
      if (seconds < 1) {
        setSeconds(seconds + 1);
      } else if (seconds == 1) {
        BackgroundTimer.clearInterval(acc_interval);
      }
    }, 1000);
    return () => {
      BackgroundTimer.clearInterval(acc_interval);
    };
  });

  useEffect(() => {
    if (seconds == 1) {
      navigation.replace('Home');
    }
  });
  return (
    <ImageBackground
      source={images.spashBGImg}
      style={style.spashBGImg}></ImageBackground>
  );
};
export default SplashScreen;
