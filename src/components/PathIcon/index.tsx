import {View} from 'react-native';
import style from './style';
interface PathIcon {
  data: [
    {
      name: string;
      status: string;
    },
  ];
  style: {
    openCircle: object;
    closeCircle: object;
    dotLine: object;
  };
  state: boolean;
}

const PathIcon = (props: PathIcon) => {
  console.log('Path', props);
  const dot = [0, 1, 2, 3, 4, 5];
  const {data} = props;
  return (
    <View>
      <View style={{...style.openCircle, ...props?.style?.openCircle}} />
      {dot.map(() => (
        <View style={{...style.dotIcon, ...props?.style?.dotLine}} />
      ))}
      {props.state &&
        data.map(() => (
          <View>
            <View style={{...style.dotIcon, ...props?.style?.dotLine}} />
            <View style={{...style.dotIcon, ...props?.style?.dotLine}}>
              <View style={{...style.flatDotIcon}} />
            </View>
            <View style={{...style.dotIcon, ...props?.style?.dotLine}} />
          </View>
        ))}

      <View style={{...style.dotIcon, ...props?.style?.dotLine}} />
      <View style={{...style.dotIcon, ...props?.style?.dotLine}} />
      <View style={{...style.closeCircle, ...props?.style?.closeCircle}} />
    </View>
  );
};
export default PathIcon;
