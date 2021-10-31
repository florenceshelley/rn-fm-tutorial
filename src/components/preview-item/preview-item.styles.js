import {StyleSheet} from 'react-native';

import {SHADOWS} from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    alignItems: 'flex-start',
  },
  boxHeader: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  previewBox: {
    marginRight: 4,
    marginBottom: 4,
    padding: 30,

    // box shadows
    ...SHADOWS,
  },
});

export default styles;
