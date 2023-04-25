import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import style from './style';

const StationAbtractDetail = props => {
  console.log('1', props.data);
  const renderSubItem = () => {
    return (
      <View style={style.renderHeaderFrame}>
        <Text style={style.renderTxtFrame}>{'item.label'}</Text>
      </View>
    );
  };
  const renderItem = item => {
    return (
      <View>
        <View style={style.renderHeaderFrame}>
          <Text style={style.renderTxtFrame}>{item.label}</Text>
        </View>
        <FlatList
          data={item.value}
          renderItem={({item}) => renderSubItem(item)}
          scrollEnabled={false}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => renderItem(item)}
      scrollEnabled={false}
    />
  );
};
export default StationAbtractDetail;
