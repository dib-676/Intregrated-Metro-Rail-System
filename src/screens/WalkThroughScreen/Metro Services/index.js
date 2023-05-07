import {FlatList, TouchableOpacity, Text, Image} from 'react-native';
import style from './style';
import {images} from '../../../utils';

const MetroServices = (props: any) => {
  const {navigation, data} = props;
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        style={style.navigationBtn}
        activeOpacity={0.8}
        onPress={() => {
          if (item.label == 'Nearest Metro Station') {
            navigation.navigate(item.onPress.routeName, {
              nearestStation: props.nearestStation,
            });
          } else {
            navigation.navigate(item.onPress.routeName, item.onPress.params);
          }
        }}>
        <Image source={item.icon} style={style.mapSearchImg} />
        <Text style={style.navigationBtnTxt}>{item.label}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      numColumns={2}
      renderItem={({item}) => renderItem(item)}
    />
  );
};
export default MetroServices;
