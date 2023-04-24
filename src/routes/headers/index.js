import HeaderScreen from '../../components/CustomHeader';
import {View} from 'react-native';
const homeScreenHeader = (props: any) => {
  const {navigation, attributes} = props;
  navigation.setOptions({
    header: () => {
      return (
        <HeaderScreen
          type={'None'}
          navigation={navigation}
          attributes={attributes}
        />
      );
    },
  });
};

export {homeScreenHeader};
