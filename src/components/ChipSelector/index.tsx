import {Text, TouchableOpacity, View} from 'react-native';
import {colors, strings} from '../../utils';
import style from './style';
import {vw} from '../../utils/dimensions';

interface ChipSelector {
  style: object;
  state: number;
  setState: Function;
  data: {
    time: string;
  };
  onPress: Function;
}

const ChipSelector = (props: ChipSelector) => {
  return (
    <View style={style.chipSelectorView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => (props.setState(0), props.onPress('least-distance'))}
        style={{
          ...style.chipButton,
          ...{marginStart: vw(10)},
          ...{
            backgroundColor: props.state === 0 ? 'orange' : 'white',
            borderColor: props.state === 0 ? 'orange' : 'black',
          },
        }}>
        <Text style={style.chipName}>{strings.short_route}</Text>
        <Text style={style.chipTime}>{props.state === 0 && props.data.time}</Text>
        <View style={{...style.chipSlug}}>
          <Text style={style.chipSlugTxt}>{strings.recommend}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => (
          props.setState(1), props.onPress('minimum-interchange')
        )}
        style={{
          ...style.chipButton,
          ...{marginEnd: vw(10)},
          ...{
            backgroundColor: props.state === 1 ? 'orange' : 'white',
            borderColor: props.state === 1 ? 'orange' : 'black',
          },
        }}>
        <Text style={style.chipName}>{strings.min_route}</Text>
        <Text style={style.chipTime}>{props.state === 1 && props.data.time}</Text>
        <View>
          <Text></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ChipSelector;
