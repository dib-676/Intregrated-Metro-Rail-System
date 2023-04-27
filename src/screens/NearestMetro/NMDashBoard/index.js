import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import style from './style';
import {dimensions} from '../../../utils';
const {vw, vh} = dimensions;
const NearestMetro = (props: any) => {
  const renderItem = (item: any) => {
    return (
      <View style={style.renderItemCard}>
        <View style={style.card}>
          <Text style={style.cardTxt}>data1</Text>
          <Text style={style.cardTxt}>data2</Text>
        </View>
        <View style={style.card}>
          <Text style={style.cardTxt}>data3</Text>
          <Text style={style.cardTxt}>data4</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.mainFrame}>
      <ScrollView>
        <FlatList
          style={{marginVertical: vh(10)}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => renderItem(item)}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NearestMetro;
