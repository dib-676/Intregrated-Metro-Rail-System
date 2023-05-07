import {ActivityIndicator, SafeAreaView} from 'react-native';
import style from './style';
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';

const OnlineRecharge = () => {
  const {city} = useSelector((state: any) => state.metroReducer);
  const url = {
    'Delhi Metro': 'https://www.dmrcsmartcard.com/',
    'Noida Metro': 'https://transit.sbi/swift/customerportal?pagename=nmrc',
    'Kolkata Metro': 'https://mtp.indianrailways.gov.in/',
    'Mumbai Metro': 'https://transit.sbi/swift/customerportal?pagename=mmrda',
    'Chennai Metro': 'https://transit.sbi/swift/customerportal?pagename=cmrl',
    'Lucknow Metro': 'https://transit.sbi/swift/customerportal?pagename=kanpur',
  };
  const LoadingIndicatorView = () => {
    return <ActivityIndicator color="#009b88" size="large" />;
  };
  return (
    <SafeAreaView style={style.mainFrame}>
      <WebView
        originWhitelist={['*']}
        source={{uri: url[city]}}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};
export default OnlineRecharge;
