import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  boxHeader: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  previewBox: {
    marginRight: 4,
    marginBottom: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,

    // box shadows
    shadowColor: '#bbb',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default styles;
