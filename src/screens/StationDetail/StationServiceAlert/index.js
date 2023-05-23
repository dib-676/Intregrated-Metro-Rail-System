import {FlatList, View, Text} from 'react-native';
import style from './style';
import {colors, dimensions} from '../../../utils';
import {fareRouteLineColor, lineColors} from '../../../constants';
const {vw, vh} = dimensions;
const StationServiceAlert = (props: any) => {
  const lineIcon = (color: string) => (
    <>
      <View style={{...style.singleLineicon, backgroundColor: color}} />
      <View style={{...style.singleLineicon, backgroundColor: color}} />
      <View style={{...style.circleIcon, backgroundColor: color}} />
      <View style={{...style.singleLineicon, backgroundColor: color}} />
      <View style={{...style.singleLineicon, backgroundColor: color}} />
    </>
  );
  const renderItem = (item: any) => {
    console.log('serviceAlertLine', item);
    return (
      <View style={{...style.serviceView}}>
        <View style={style.dottedView}>{lineIcon(colors.green)}</View>
        <View
          style={{
            ...style.serviceLineView,
            borderColor: item.color,
            backgroundColor: fareRouteLineColor[item.line_color],
          }}>
          <View></View>
          <View>
            <Text>{item.status}</Text>
          </View>
        </View>
      </View>
    );
  };
  console.log(props.data);
  return (
    <View style={{height: vh(70 * props.data.length)}}>
      <FlatList
        scrollEnabled={false}
        data={props.data}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};
export default StationServiceAlert;
