/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';

import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const predefinedLocations = [
  {
    id: 1,
    title: 'New York City',
    description: 'The Big Apple',
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    id: 2,
    title: 'San Francisco',
    description: 'Golden Gate Bridge',
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 3,
    title: 'Chicago',
    description: 'Windy City',
    latitude: 41.8781,
    longitude: -87.6298,
  },
  {
    id: 4,
    title: 'Chennai',
    description: 'Tamilnadu',
    latitude:  13.067439,
    longitude: 80.237617,
  },
];

// function Section({children, title}: SectionProps): React.JSX.Element {
//   console.log('titlechanged', title);
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  // const safePadding = '5%';

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.8283, // Center of US
          longitude: -98.5795,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}>
        {predefinedLocations.map(location => (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
            description={location.description}
            pinColor="red" // You can customize the marker color
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
