import {StyleSheet} from 'react-native';

import {SHADOWS} from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  boxHeader: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#000',
  },
  previewBox: {
    marginRight: 4,
    marginBottom: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,

    // box shadows
    ...SHADOWS,
  },
});

export default styles;
