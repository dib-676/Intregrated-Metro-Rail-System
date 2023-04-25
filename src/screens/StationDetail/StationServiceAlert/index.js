import {FlatList, View} from 'react-native';
import style from './style';
import {colors, dimensions} from '../../../utils';
import {lineColors} from '../../../constants';
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
    return (
      <View style={{...style.serviceView}}>
        <View style={style.dottedView}>{lineIcon(colors.green)}</View>
        <View
          style={{
            ...style.serviceLineView,
            borderColor: item.color,
            backgroundColor: lineColors[item.color],
          }}></View>
      </View>
    );
  };
  console.log(props.data.length);
  return (
    <View style={{height: vh(70 * props.data.length)}}>
      <FlatList data={props.data} renderItem={({item}) => renderItem(item)} />
    </View>
  );
};
export default StationServiceAlert;
