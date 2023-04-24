import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {images, strings} from '../../../utils';
import style from './style';

const DrawerScreen = ({route, navigation}: any) => {
  const {drawerComponents: data} = route.params;
  const renderItem = (item: any) => {
    return (
      <Text
        style={style.item}
        onPress={() => {
          navigation.pop();
          // navigation.navigate(item.fileName)
        }}>
        {item.name}
      </Text>
    );
  };
  return (
    <SafeAreaView style={style.mainFrame}>
      <TouchableOpacity style={style.closeBtn} onPress={() => navigation.pop()}>
        <Image source={images.close} style={style.closeIcon} />
      </TouchableOpacity>
      <View style={style.menuItemView}>
        {/* Menu Items View*/}
        <View style={style.menuItems}>
          <FlatList data={data} renderItem={({item}) => renderItem(item)} />
        </View>
        {/* Quick Contact View */}
        <View style={style.quickContactView}>
          <Text style={style.quick_contact}>{strings.quick_contact}</Text>
          <View style={style.dmrcHelpline}>
            <Image source={images.telephone} style={style.dmrcHelplineIcon} />
            <Text style={style.dmrcHelplineTxt}>{strings.helpline_no}</Text>
          </View>
          <View style={style.dmrcHelpline}>
            <Image source={images.telephone} style={style.dmrcHelplineIcon} />
            <Text style={style.dmrcHelplineTxt}>
              {strings.cisf_helpline_no}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DrawerScreen;
