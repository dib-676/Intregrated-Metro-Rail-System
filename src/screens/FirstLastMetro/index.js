import {SafeAreaView} from 'react-native';
import SelectStation from '../WalkThroughScreen/SelectStation';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';

const FirstLastMetro = ({navigation}: any) => {
  const {source, destination} = useSelector((state: any) => state.metroReducer);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{paddingTop: 40}}>
      <SelectStation
        navigation={navigation}
        source={source}
        destination={destination}
        dispatch={dispatch}
      />
      <CustomButton label={'Show Metro Time'} />
    </SafeAreaView>
  );
};
export default FirstLastMetro;
