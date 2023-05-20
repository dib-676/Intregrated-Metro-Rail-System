import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import style from './style';
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';
import {strings} from '../../utils';

const OnlineRecharge = () => {
  const {city} = useSelector((state: any) => state.metroReducer);
  const url: any = {
    'Delhi Metro': 'https://www.dmrcsmartcard.com/',
    'Noida Metro': 'https://transit.sbi/swift/customerportal?pagename=nmrc',
    'Kolkata Metro': 'https://mtp.indianrailways.gov.in/',
    'Mumbai Metro': 'https://transit.sbi/swift/customerportal?pagename=mmrda',
    'Chennai Metro': 'https://transit.sbi/swift/customerportal?pagename=cmrl',
    'Lucknow Metro': 'https://transit.sbi/swift/customerportal?pagename=kanpur',
  };
  const LoadingIndicatorView = () => {
    return (
      <>
        <ActivityIndicator
          color="#009b88"
          size="large"
          style={{...style.indicator}}
        />
        <Text
          style={{
            ...style.indicatorTxt,
          }}>
          {strings.loadingContent}
        </Text>
      </>
    );
  };
  const onMessage = (m: any) => {
    const paymentDetails = JSON.parse(m);
    console.log('Payment Details', m);
  };
  return (
    <SafeAreaView style={style.mainFrame}>
      <WebView
        originWhitelist={['*']}
        source={{uri: url[city]}}
        renderLoading={LoadingIndicatorView}
        javaScriptEnabledAndroid
        javaScriptEnabled
        onMessage={onMessage}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};
export default OnlineRecharge;
