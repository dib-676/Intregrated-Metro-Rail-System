import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {colors, strings} from '../../utils';
import Header from '../../components/CustomHeader';
import {lineNames, lineColors, getCity} from '../../constants';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  setSource,
  setDestination,
  setStationName,
} from '../../redux-toolkit/reducers/metroSlice';
import Toast from 'react-native-simple-toast';
import {isSubstring} from '../../utils/commonFunction';

const stationItem = ({
  item,
  navigation,
  searchType,
  dispatch,
  source,
  destination,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={style.stationItem}
      onPress={() => {
        if (searchType == 'Search Station') {
          dispatch(setStationName(item.name));
          navigation.navigate('StationDashboard');
        } else if (searchType == 'Depart From') {
          if (destination != item.name) {
            dispatch(setSource(item.name));
            navigation.pop();
          } else {
            Toast.show('Please Select Different Source !', Toast.SHORT);
          }
        } else {
          if (source != item.name) {
            dispatch(setDestination(item.name));
            navigation.pop();
          } else {
            Toast.show('Please Select Different Destination !', Toast.SHORT);
          }
        }
      }}>
      <Text style={style.stationItemTxt}>{item.name}</Text>
      <FlatList
        style={style.linesView}
        data={item.lines}
        renderItem={({item}) => (
          <Text style={{...style.lines, backgroundColor: lineColors[item]}}>
            {lineNames[item]}
          </Text>
        )}
      />
    </TouchableOpacity>
  );
};
const ItemSeparatorComponent = () => {
  return null;
};

const StationList = ({route, navigation}: any) => {
  const [searchBox, setSearchBox] = useState('');
  const {searchType} = route.params;
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {city, source, destination} = useSelector(
    (state: any) => state.metroReducer,
  );

  const data = getCity[city];

  return (
    <View style={style.mainFrame}>
      <Header
        type={strings.searchHeader}
        searchPlaceHolder={searchType}
        value={search}
        navigation={navigation}
        searchBoxValue={searchBox}
        setSearchBox={e => {
          setSearchBox(e);
        }}
        clearBtn={() => setSearchBox('')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        style={style.list}
        renderItem={({item}) =>
          searchBox.length > 0
            ? isSubstring(searchBox, item.name)
              ? stationItem({
                  item,
                  navigation,
                  searchType,
                  dispatch,
                  source,
                  destination,
                })
              : null
            : stationItem({
                item,
                navigation,
                searchType,
                dispatch,
                source,
                destination,
              })
        }
      />
    </View>
  );
};
export default StationList;
