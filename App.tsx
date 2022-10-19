/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  runOnUI,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const triggerSv = useSharedValue(0);
  const [arrStt] = useState([]);
  const [objStt] = useState({});
  const arrSv = useSharedValue([]);
  const objSv = useSharedValue({});

  useAnimatedReaction(
    () => {
      return {
        trigger: triggerSv.value,
        arrStt: arrStt,
        objStt: objStt,
        arrSv: arrSv.value,
        objSv: objSv.value,
      };
    },
    (cur, prev) => {
      if (prev == null) {
        return;
      }
      console.log('trigger: ', cur.trigger);
      console.log('cur.arrStt === prev.arrStt: ', cur.arrStt === prev.arrStt); // always false;
      console.log('cur.objStt === prev.objStt: ', cur.objStt === prev.objStt); // always true;
      console.log('cur.arrSv === prev.arrSv: ', cur.arrSv === prev.arrSv); // always false;
      console.log('cur.objSv === prev.objSv: ', cur.objSv === prev.objSv); // always true;
      console.log('');
    },
    [triggerSv, arrStt, objStt, arrSv, objSv],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      runOnUI(() => {
        'worklet';
        triggerSv.value = triggerSv.value + 1;
      })();
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [triggerSv]);

  return null;
};

export default App;
