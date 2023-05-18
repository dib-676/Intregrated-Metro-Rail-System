import {View, FlatList, Text} from 'react-native';
import style from './style';
const StationList = (props: any) => {
  return (
    <>
      {props.state &&
        props.data.map((val: any) => (
          <View style={style.dotIcon}>
            <Text style={style.stationView}>{val.name}</Text>
          </View>
        ))}
    </>
  );
};
export default StationList;
