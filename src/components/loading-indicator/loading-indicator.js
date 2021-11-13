import React from 'react';
import {View, Text} from 'react-native';

import styles from './loading-indicator.styles';

export const LoadingIndicator = () => (
  <View style={styles.loadingIndicator}>
    <Text style={styles.loadingIndicatorText}>Loading...</Text>
  </View>
);
