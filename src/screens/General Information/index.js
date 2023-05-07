import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import style from './style';
import {colors, fonts, images, strings} from '../../utils';
import {generalInfo} from '../../constants';

const GeneralInfo = ({navigation}: any) => {
  return (
    <SafeAreaView style={style.generalInfo}>
      <Image source={images.supportImg} style={style.support} />
      <Text style={style.emerency}>{'Emergency Numbers'}</Text>
      <Text style={style.link}>{strings.moreInfo}</Text>
      {generalInfo.links.map(val => {
        return (
          <TouchableOpacity
            style={{...style.link}}
            onPress={() => {
              Linking.openURL(val.label);
            }}
            activeOpacity={0.8}>
            <Text style={{...style.metroLink, textDecorationLine: 'underline'}}>
              {val.label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View style={style.numberLink}>
        {generalInfo.numbers.map(val => {
          return (
            <View style={style.impNumber}>
              <TouchableOpacity
                style={{...style.number_link}}
                onPress={() => {
                  Linking.openURL(val.label);
                }}
                activeOpacity={0.8}>
                <Text
                  style={{
                    ...style.metroLink,
                    color: colors.darkBlack,
                    fontFamily: fonts.IBM_Medium,
                  }}>
                  {val.label}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...style.number_link, flexDirection: 'row'}}
                onPress={() => {
                  Linking.openURL(val.label);
                }}
                activeOpacity={0.8}>
                <Text style={{...style.metroLink}}>{val.value}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
export default GeneralInfo;
