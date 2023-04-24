import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';
import {colors, dimensions, fonts, images} from '../../utils';
import style from './style';
const {vw, vh} = dimensions;
const HeaderScreen = (props: any) => {
  const {city} = useSelector((state: any) => state.metroReducer);
  
  const headerStyle = {
    headerStyle: {
      height: props.type == 'None' ? vh(60) : vh(50),
      backgroundColor: props.type == 'None' ? colors.blue : colors.borderColor,
    },
  };

  return (
    <View style={{...style.headerFrame, ...headerStyle.headerStyle}}>
      {props.type == 'None' ? (
        <>
          <Image source={props.attributes.icon} style={style.logo} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={style.dropDownView}
            onPress={() =>
              props.navigation.navigate('CityDropDownList', {
                cities: props.attributes.cityList,
              })
            }>
            <Text style={style.dropDownValue}>{city}</Text>
            <Image source={images.dropDown} style={style.dropDownArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={style.drawerMenu}
            onPress={() =>
              props.navigation.navigate('StartScreenDrawer', {
                drawerComponents: props.attributes.drawerComponents,
              })
            }>
            <Image source={images.menu} style={style.drawerMenuIcon} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={style.backBtn}
            onPress={() => props.navigation.pop()}>
            <Image source={images.backBtn} style={style.backBtnImg} />
          </TouchableOpacity>
          <View style={style.searchBox}>
            <TextInput
              style={style.searchBoxInp}
              placeholder={props.searchPlaceHolder}
              placeholderTextColor={colors.darkBlack}
              value={props.searchBoxValue}
              onChangeText={props.setSearchBox}
            />
            <TouchableOpacity
              style={style.clearBoxBtn}
              activeOpacity={0.5}
              onPress={() => {
                props.clearBtn();
              }}>
              <Image source={images.close} style={style.clearBox} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};
export default HeaderScreen;
