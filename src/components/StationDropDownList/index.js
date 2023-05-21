import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {strings} from '../../utils';
import Header from '../../components/CustomHeader';
import {lineNames, lineColors, getCity} from '../../constants';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  setSource,
  setDestination,
  setStationName,
  setFLMSource,
  setFLMDestination,
  setStationDetail,
} from '../../redux-toolkit/reducers/metroSlice';
import Toast from 'react-native-simple-toast';
import {isSubstring} from '../../utils/commonFunction';
import {fetchStationDetail} from '../../redux-toolkit/api/axiosConfig';

const stationItem = ({
  item,
  navigation,
  searchType,
  dispatch,
  source,
  destination,
  callback,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={style.stationItem}
      onPress={() => {
        if (callback === 'firstLast') {
          if (searchType == 'Depart From') {
            if (destination != item.station_name) {
              dispatch(
                setFLMSource({
                  station_name: item.station_name,
                  station_code: item.station_code,
                }),
              );
              navigation.pop();
            } else {
              Toast.show('Please Select Different Source !', Toast.SHORT);
            }
          } else {
            if (source != item.station_name) {
              dispatch(
                setFLMDestination({
                  station_name: item.station_name,
                  station_code: item.station_code,
                }),
              );
              navigation.pop();
            } else {
              Toast.show('Please Select Different Destination !', Toast.SHORT);
            }
          }
        } else if (searchType == 'Search Station') {
          dispatch(
            setStationName({
              station_name: item.station_name,
              station_code: item.station_code,
            }),
          );
          navigation.navigate('StationDashboard');
        } else if (searchType == 'Depart From') {
          if (destination != item.station_name) {
            dispatch(
              setSource({
                station_name: item.station_name,
                station_code: item.station_code,
              }),
            );
            navigation.pop();
          } else {
            Toast.show('Please Select Different Source !', Toast.SHORT);
          }
        } else {
          if (source != item.station_name) {
            dispatch(
              setDestination({
                station_name: item.station_name,
                station_code: item.station_code,
              }),
            );
            navigation.pop();
          } else {
            Toast.show('Please Select Different Destination !', Toast.SHORT);
          }
        }
      }}>
      <Text style={style.stationItemTxt}>{item.station_name}</Text>
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

const StationList = ({route, navigation}: any) => {
  const [searchBox, setSearchBox] = useState('');
  const {searchType, callback} = route.params;
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
            ? isSubstring(searchBox, item.station_name)
              ? stationItem({
                  item,
                  navigation,
                  searchType,
                  dispatch,
                  source,
                  destination,
                  callback,
                })
              : null
            : stationItem({
                item,
                navigation,
                searchType,
                dispatch,
                source,
                destination,
                callback,
              })
        }
      />
    </View>
  );
};
export default StationList;
