import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  setCity,
  setDestination,
  setSource,
} from '../../redux-toolkit/reducers/metroSlice';
import {colors, dimensions} from '../../utils';
import style from './style';
const {vw, vh} = dimensions;

const CityDropDownList = ({route, navigation}: any) => {
  const {cities: data} = route.params;
  const dispatch = useDispatch();
  console.log(data.length);
  const renderItem = (item: any) => {
    return (
      <Text
        style={style.item}
        onPress={() => {
          dispatch(setCity(item.name));
          dispatch(setSource({station_name: '', station_code: ''}));
          dispatch(setDestination({station_name: '', station_code: ''}));
          navigation.pop();
        }}>
        {item.name}
      </Text>
    );
  };
  const ItemSeparatorComponent = () => {
    return <View style={style.itemSeparatorComponent}></View>;
  };
  return (
    <TouchableOpacity style={style.mainFrame} onPress={() => navigation.pop()}>
      <TouchableOpacity style={style.close} onPress={() => navigation.pop()} />
      <FlatList
        scrollEnabled={false}
        style={style.dropDown}
        data={data}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => ItemSeparatorComponent()}
      />
      <View
        style={{
          height: vh(700 - data.length * 30),
        }}></View>
    </TouchableOpacity>
  );
};

export default CityDropDownList;
