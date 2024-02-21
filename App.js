import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyContext } from './src/context';
import StageOne from './src/components/stage_one';
import StageTwo from './src/components/stage_two';

export default function App() {
  const context = useContext(MyContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        {context && context.state && context.state.stage === 1 ? (
          <StageOne />
        ) : (
          <StageTwo />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
});
