import {
  Animated,
  FlatList,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PathIcon from '../../../../components/PathIcon';
import style from './style';
import {useState} from 'react';
import {vw} from '../../../../utils/dimensions';
import StationList from '../StationList';
import {fareRouteLineColor} from '../../../../constants';

interface RouteMap {
  data: {
    path: [
      {
        name: string;
        status: string;
      },
    ];
    start: string;
    towards_station: string;
    path_time: string;
    line: string;
  };
  state: boolean;
}
const RouteMap = (props: RouteMap) => {
  const [state, setState] = useState(props.state);
  const time = props.data.path_time.split(':');

  return (
    <Animated.View style={style.routeCard}>
      <PathIcon
        style={{
          openCircle: {backgroundColor: fareRouteLineColor[props.data.line]},
          closeCircle: {borderColor: fareRouteLineColor[props.data.line]},
          dotLine: {backgroundColor: fareRouteLineColor[props.data.line]},
        }}
        data={props.data.path.slice(1, props.data.path.length - 1)}
        state={state}
      />
      <View style={style.stationView}>
        <View>
          <Text style={style.firstStation}>{props.data.path[0].name}</Text>
        </View>
        {props.data.path.length - 2 > 0 && (
          <TouchableOpacity
            style={{marginTop: vw(10)}}
            onPress={() => {
              setState(!state);
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
            }}>
            <Text style={style.showBtn}>
              {state
                ? `Show Less`
                : `Show all ${props.data.path.length - 2} stations`}
            </Text>
          </TouchableOpacity>
        )}
        <Text style={style.stationsTT}>{`${
          parseInt(time[0]) * 60 + parseInt(time[1])
        } min(s)`}</Text>
        <StationList
          state={state}
          data={props.data.path.slice(1, props.data.path.length - 1)}
        />
        <View>
          <Text style={style.lastStation}>
            {props.data.path[props.data.path.length - 1].name}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default RouteMap;
