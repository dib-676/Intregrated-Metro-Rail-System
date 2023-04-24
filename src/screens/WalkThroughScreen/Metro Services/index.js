import {FlatList, TouchableOpacity, Text} from 'react-native';
import style from './style';

const MetroServices = (props: any) => {
  const {navigation, data} = props;
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        style={style.navigationBtn}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(item.onPress.routeName, item.onPress.params)
        }>
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
