import HeaderScreen from '../../components/CustomHeader';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, images} from '../../utils';
import {vh, vw} from '../../utils/dimensions';
const homeScreenHeader = (props: any) => {
  const {navigation, attributes} = props;
  navigation.setOptions({
    header: () => {
      return (
        <HeaderScreen
          type={'None'}
          navigation={navigation}
          attributes={attributes}
        />
      );
    },
  });
};
const fareScreenHeader = (props: any) => {
  const {navigation} = props;
  navigation.setOptions({
    header: () => {
      return (
        <View
          style={{
            flexDirection: 'row',
            width: vw(360),
            height: vw(40),
            backgroundColor: colors.white,
            paddingHorizontal: vw(15),
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Image
              source={images.backBtn}
              style={{width: vw(20), height: vh(20)}}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginStart: vw(20),
              color: colors.blue,
              fontSize: vw(13),
              fontFamily: fonts.IBM_Bold,
            }}>
            {props.source}
          </Text>
          <Image
            source={images.backBtn}
            style={{
              marginStart: vw(10),
              width: vw(20),
              height: vh(20),
              tintColor: colors.blue,
              transform: [{rotate: '180deg'}],
            }}
          />
          <Text
            style={{
              marginStart: vw(20),
              color: colors.blue,
              fontSize: vw(13),

              fontFamily: fonts.IBM_Bold,
            }}>
            {props.destination}
          </Text>
        </View>
      );
    },
  });
};

export {homeScreenHeader, fareScreenHeader};
