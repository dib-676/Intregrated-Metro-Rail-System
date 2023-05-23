import {
  FlatList,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PathIcon from '../../../../components/PathIcon';
import style from './style';
import {useState} from 'react';
import {vw, vh} from '../../../../utils/dimensions';
import StationList from '../StationList';
import {fareRouteLineColor} from '../../../../constants';
import {colors, fonts, strings} from '../../../../utils';

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
  console.log('toward', props.data.towards_station);
  return (
    <View style={style.routeCard}>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: vw(320),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.firstStation}>{props.data.path[0].name}</Text>
            <View
              style={{
                marginStart: 10,
                backgroundColor: fareRouteLineColor[props.data.line],
                width: 68,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: colors.white, fontSize: vw(11)}}>
                {props.data.line}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              padding: vw(5),
            }}>
            <Text
              style={{
                color: colors.black60,
                fontSize: vw(10),
                fontFamily: fonts.IBM_Medium,
                textAlign: 'right',
              }}>
              {strings.towards}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: colors.black60,
                fontSize: vw(10),
                fontFamily: fonts.IBM_Medium,
                width: vw(100),
                textAlign: 'right',
              }}>
              {props.data.towards_station}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{marginTop: vw(10)}}
          activeOpacity={0.9}
          onPress={() => {
            setState(!state);
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
          }}>
          {props.data.path.length - 2 > 0 && (
            <Text style={style.showBtn}>
              {state
                ? `Show Less`
                : `Show all ${props.data.path.length - 2} stations`}
            </Text>
          )}
        </TouchableOpacity>

        <Text style={{...style.stationsTT}}>{`${
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
    </View>
  );
};

export default RouteMap;
