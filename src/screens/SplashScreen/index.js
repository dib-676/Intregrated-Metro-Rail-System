import {ImageBackground} from 'react-native';
import {images} from '../../utils';
import style from './style';
// import BackgroundTimer from 'react-native-background-timer';
import {useEffect, useState} from 'react';
import BackgroundTimer from '../../utils/backgroundTimer';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch} from 'react-redux';
import {setLocation} from '../../redux-toolkit/reducers/metroSlice';

const SplashScreen = ({navigation}: any) => {
  const [seconds, setSeconds] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    Geolocation.getCurrentPosition(info =>
      dispatch(
        setLocation({lat: info.coords.latitude, long: info.coords.longitude}),
      ),
    );
  }, []);

  useEffect(() => {
    const acc_interval = BackgroundTimer.setInterval(() => {
      if (seconds < 8) {
        setSeconds(seconds + 1);
      } else if (seconds == 8) {
        BackgroundTimer.clearInterval(acc_interval);
      }
    }, 1000);

    return () => {
      BackgroundTimer.clearInterval(acc_interval);
    };
  });
  useEffect(() => {
    if (seconds == 4) {
      navigation.navigate('Home');
    }
  });
  return (
    <ImageBackground
      source={images.spashBGImg}
      style={style.spashBGImg}></ImageBackground>
  );
};
export default SplashScreen;
