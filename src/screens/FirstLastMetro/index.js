import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import {useState, useCallback} from 'react';
import SelectStation from '../WalkThroughScreen/SelectStation';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import RadioButton from '../../components/RadioButton';
import {colors, strings} from '../../utils';
import {calculateFareByCity} from '../../constants';
import style from './style';

const FirstLastMetro = ({navigation}: any) => {
  const {
    flm_source: source,
    flm_destination: destination,
    flm_source_stCode,
    flm_destination_stCode,
    city,
  } = useSelector((state: any) => state.metroReducer);
  const [value, setValue] = useState('least-distance');
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const calculateFirstLast = useCallback(() => {
    setLoading(true);
    calculateFareByCity[city]({
      source: flm_source_stCode,
      destination: flm_destination_stCode,
      value: value,
      setFirst: setFirst,
      setLast: setLast,
      setState: setState,
      setLoading: setLoading,
    });
  });
  console.log(`first Metro: ${first} and last Metro: ${last} city ${city}`);
  const FirstLastMetroFare = () => {
    return (
      <View style={style.fareView}>
        <View style={style.fareHeaderView}>
          <Text style={style.fareHeader}>{'First Metro'}</Text>
          <Text style={style.fareTxt}>{first}</Text>
        </View>
        <View style={style.fareHeaderView}>
          <Text style={style.fareHeader}>{'Last Metro'}</Text>
          <Text style={style.fareTxt}>{last}</Text>
        </View>
      </View>
    );
  };

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <RadioButton setValue={setValue} />
      <SelectStation
        navigation={navigation}
        source={source}
        destination={destination}
        dispatch={dispatch}
        type={'firstLast'}
      />
      {state && <FirstLastMetroFare />}
      <ActivityIndicator color={'blue'} animating={loading} size={'large'} />
      <CustomButton label={'Show Metro Time'} onPress={calculateFirstLast} />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <Text style={{color: colors.orange, marginEnd: 10, fontSize: 20}}>
          {'*'}
        </Text>
        <Text style={{fontSize: 10, color: colors.darkBlack}}>
          {strings.firstLastMetroDisclamer}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default FirstLastMetro;
