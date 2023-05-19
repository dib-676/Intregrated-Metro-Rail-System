import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import ChipSelector from '../../components/ChipSelector';
import {useCallback, useEffect, useState} from 'react';
import {fareChart} from '../../constants';
import {useSelector} from 'react-redux';
import FareStationInterChange from './components/FareStationInterChange';
import RouteMap from './components/RouteMap';
import PathIcon from '../../components/PathIcon';
import style from './style';

const FareAndRoute = props => {
  const {city, source_stCode, destination_stCode} = useSelector(
    state => state.metroReducer,
  );
  const {day,value} = props.route.params;
  const [chipState, setChipState] = useState(value==='least-distance'?0:1);
  const [fare, setFare] = useState({});
  const [time, setTime] = useState('');
  const [station, setStation] = useState('');
  const [interchange, setInterchange] = useState('');
  const [route, setRoute] = useState([]);
  const [defState, setDefState] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
//     calculateFare('least-distance');
    calculateFare(value);
  }, []);

  const calculateFare = useCallback(value => {
    fareChart[city]({
      source: source_stCode,
      destination: destination_stCode,
      value: value,
      setFare: setFare,
      setTime: setTime,
      setStation: setStation,
      setInterchange: setInterchange,
      setRoute: setRoute,
    });
    setDefState(false);
  });
  console.log('fare', fare);
  console.log('time', time);
  console.log('station', station);
  console.log('interchange', interchange);
  console.log('day', day);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ChipSelector
        state={chipState}
        style={{}}
        setState={setChipState}
        onPress={calculateFare}
        data={{time: time + ' min'}}
      />
      <FareStationInterChange
        fare={day == 0 ? fare.weekend_fare : fare.weekday_fare}
        station={station}
        interchange={interchange}
      />
      <FlatList
        data={route}
        renderItem={({item}) => (
          <>
            {item.station_interchange_time > 0 && (
              <View style={style.stationInterChange}>
                <Text
                  style={{
                    color: 'black',
                  }}>{`Change here (move towards ${item.line} - ${item.station_interchange_time} Min(s))`}</Text>
              </View>
            )}
            <RouteMap data={item} state={defState} />
          </>
        )}
      />
    </SafeAreaView>
  );
};
export default FareAndRoute;
