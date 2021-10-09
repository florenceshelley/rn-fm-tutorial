import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => (
  <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Here are some boxes of different colours
      </Text>
      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.boxText}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.boxText}>Blue #268bd2</Text>
      </View>
      <View style={[styles.box, styles.magenta]}>
        <Text style={styles.boxText}>Magenta #d33682</Text>
      </View>
      <View style={[styles.box, styles.orange]}>
        <Text style={styles.boxText}>Orange #cb4b16</Text>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {marginVertical: 5, paddingVertical: 10, paddingHorizontal: 20},
  headerText: {fontWeight: 'bold'},
  box: {
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  boxText: {fontWeight: 'bold', color: '#fff'},
  cyan: {backgroundColor: '#2aa198'},
  blue: {backgroundColor: '#268bd2'},
  magenta: {backgroundColor: '#d33682'},
  orange: {backgroundColor: '#cb4b16'},
});

export default App;
