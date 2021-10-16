import {StyleSheet} from 'react-native';

import {SHADOWS} from '../../styles/global.styles';

const styles = StyleSheet.create({
  box: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',

    // box shadows
    ...SHADOWS,
  },
  boxText: {fontWeight: 'bold'},
  boxDarkText: {color: '#000'},
  boxLightText: {color: '#fff'},
});

export default styles;
