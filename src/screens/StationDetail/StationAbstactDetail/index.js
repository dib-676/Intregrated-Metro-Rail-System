import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import style from './style';
import {images} from '../../../utils';
import {vh, vw} from '../../../utils/dimensions';

const StationAbtractDetail = props => {
  console.log('1', props.data);

  const headerData = [
    {
      label: 'Contact',
      data: props.data.landline
        .split(', ')
        .map(val => ({label: images.station_phoneImg, value: val}))
        .concat(
          props.data.mobile
            .split(', ')
            .map(val => ({label: images.station_mobileImg, value: val})),
        ),
    },
    {
      label: 'Station Details',
      data: props.data.station_facility,
    },
    {
      label: 'Gates',
      data: props.data.gates,
    },
    {
      label: 'Lift/Escalator, Travellator',
      data: props.data.lifts,
    },
    {
      label: 'Platforms',
      data: props.data.platforms,
    },
  ];
  const renderContactItem = item => {
    console.log(item);
    return (
      <View style={{...style.renderContactItem}}>
        <View style={style.renderImgViewContact}>
          <Image source={item.label} style={style.renderImgContact} />
        </View>
        <Text style={style.renderTxtContact}>
          {item.value.length < 10 ? item.value + '08' : item.value}
        </Text>
      </View>
    );
  };
  const renderStationDetail = item => {
    console.log(item);
    return (
      <View style={{...style.renderStDetailItem}}>
        <View style={style.renderImgViewStDetail}>
          <Image
            source={{
              uri: `https://backend.delhimetrorail.com${item.image.file}`,
            }}
            style={style.renderImgStDetail}
          />
        </View>
        <Text style={style.renderTxtContact}>{item.name}</Text>
      </View>
    );
  };
  const renderPlatform = item => {
    console.log(item);
    return (
      <View style={{...style.renderPlatform}}>
        <Text style={style.renderTxtGate}>{item.platform_name}</Text>
        {item.train_towards && (
          <View style={{flexDirection: 'row', marginVertical: vw(5)}}>
            <View style={style.renderImgViewStDetail}>
              <Image source={images.trainImg} style={style.renderImgStDetail} />
            </View>
            <Text style={style.renderSubTxtGate}>
              {item.train_towards.station_name}
            </Text>
          </View>
        )}
        {item.train_towards_second && (
          <View style={{flexDirection: 'row', marginVertical: vw(5)}}>
            <View style={style.renderImgViewStDetail}>
              <Image source={images.trainImg} style={style.renderImgStDetail} />
            </View>
            <Text style={style.renderSubTxtGate}>
              {item.train_towards_second.station_name}
            </Text>
          </View>
        )}
        {item.train_towards_third && (
          <View style={{flexDirection: 'row', marginVertical: vw(5)}}>
            <View style={style.renderImgViewStDetail}>
              <Image source={images.trainImg} style={style.renderImgStDetail} />
            </View>
            <Text style={style.renderSubTxtGate}>
              {item.train_towards_third.station_name}
            </Text>
          </View>
        )}
      </View>
    );
  };
  const renderGatesDetail = item => {
    console.log(item);
    return (
      <View style={{...style.renderGatesItem}}>
        <Text style={style.renderTxtGate}>{item.gate_name}</Text>
        <Text style={style.renderSubTxtGate}>{item.location}</Text>
        <View style={style.renderViewGate}>
          <View style={style.renderImgViewStDetail}>
            <Image
              source={{
                uri: `https://backend.delhimetrorail.com/media/original_images/disabled_nq1qwhI.png`,
              }}
              style={style.renderImgStDetail}
            />
          </View>
          <Text style={style.renderSubTxtGate}>
            {item.divyang_friendly ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    );
  };
  const renderLiftDetail = item => {
    console.log(item);
    return (
      <View style={{...style.renderGatesItem}}>
        <Text style={style.renderTxtGate}>{item.name}</Text>
        <Text style={style.renderSubTxtGate}>{item.description_location}</Text>
        <View style={style.renderViewGate}>
          <View style={style.renderImgViewStDetail}>
            <Image
              source={{
                uri: `https://backend.delhimetrorail.com/media/original_images/007-elevator_ew8UOTr.png`,
              }}
              style={style.renderImgStDetail}
            />
          </View>
          <Text style={style.renderSubTxtGate}>
            {item.available_outside_inside}
          </Text>
          <View style={style.renderImgViewStDetail}>
            <Image
              source={{
                uri: `https://backend.delhimetrorail.com/media/original_images/disabled_nq1qwhI.png`,
              }}
              style={style.renderImgStDetail}
            />
          </View>
          <Text style={style.renderSubTxtGate}>
            {item.divyang_friendly ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = item => {
    return (
      <View>
        <View style={style.renderHeaderFrame}>
          <Text style={style.renderTxtFrame}>{item.label}</Text>
        </View>
        {item.label == 'Contact' && (
          <FlatList
            data={item.data}
            numColumns={2}
            renderItem={({item}) => renderContactItem(item)}
            scrollEnabled={false}
          />
        )}
        {item.label == 'Station Details' && (
          <FlatList
            data={item.data}
            renderItem={({item}) => renderStationDetail(item)}
            scrollEnabled={false}
          />
        )}
        {item.label == 'Gates' && (
          <FlatList
            data={item.data}
            renderItem={({item}) => renderGatesDetail(item)}
            scrollEnabled={false}
          />
        )}
        {item.label == 'Lift/Escalator, Travellator' && (
          <FlatList
            data={item.data}
            renderItem={({item}) => renderLiftDetail(item)}
            scrollEnabled={false}
          />
        )}
        {item.label == 'Platforms' && (
          <FlatList
            data={item.data}
            renderItem={({item}) => renderPlatform(item)}
            scrollEnabled={false}
          />
        )}
      </View>
    );
  };
  console.log('headerData.length', headerData.length);
  return (
    <>
      <FlatList
        data={headerData}
        renderItem={({item}) => renderItem(item)}
        scrollEnabled={false}
      />
      <View style={{height: vh(100)}} />
    </>
  );
};
export default StationAbtractDetail;
