import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {StyleSheet, View, Dimensions} from 'react-native';
import ParkingLocations from '../constants/ParkingLocations';
import Colors from '../constants/Colors';
import {MyLocation, LocationPicker} from '../constants/Icons';

const Map = ({navigation}) => {
  //! Const Variables
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0062;
  const initialRegion = {
    latitude: 10.773468,
    longitude: 106.660363,
    // ...position,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
  };

  //* States
  const [region, setRegion] = useState(initialRegion);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({
    longitude: null,
    latitude: null,
  });
  //* END States

  //* Rendering Effects
  useEffect(() => {
    Geolocation.getCurrentPosition(
      currPosition => {
        setError('');

        const {longitude, latitude} = currPosition.coords;
        setPosition({longitude, latitude});
      },
      geoError => setError(currError => (currError = geoError)),
      {timeout: 100000, maximumAge: 1000, enableHighAccuracy: false},
    );
  }, []);
  //* END Rendering Effects

  //* Handler Functions
  const isExist = currLocation =>
    !!currLocation.longitude && !!currLocation.latitude;

  const regionChangeHandler = currentRegion => setRegion(currentRegion);

  const currentRegionMarkerGenerator = () => {
    const markerTitle = `Your Current Position: ${region.latitude.toFixed(
      5,
    )}, ${region.longitude.toFixed(5)}`;
    if (isExist(position)) {
      return (
        <Marker
          coordinate={{
            longitude: position.longitude,
            latitude: position.latitude,
          }}
          title={markerTitle}>
          <MyLocation style={styles.currentLocationIcon} />
        </Marker>
      );
    }

    return;
  };

  const positionPickerGenerator = () => {
    const markerTitle = `Choose This Location: ${region.latitude.toFixed(
      5,
    )}, ${region.longitude.toFixed(5)}`;
    return (
      <Marker
        coordinate={{
          longitude: region.longitude,
          latitude: region.latitude,
        }}
        title={markerTitle}>
        <LocationPicker style={styles.locationPickerIcon} />
      </Marker>
    );
  };

  const parkingSlotsGenerator = coordinates => {
    const marker = coordinates.map(coordinate => (
      <Marker
        coordinate={{
          longitude: coordinate.longitude,
          latitude: coordinate.latitude,
        }}
        title={coordinate.name}
      />
    ));

    return marker;
  };
  //* END Handler Functions

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={currentRegion =>
          regionChangeHandler(currentRegion)
        }>
        {parkingSlotsGenerator(ParkingLocations.coordinates)}
        {currentRegionMarkerGenerator()}
        {positionPickerGenerator()}
      </MapView>
    </View>
  );
};

export default Map;

// Stylings
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  currentLocationIcon: {
    color: Colors.icon.location.current,
    fontSize: 30,
  },

  locationPickerIcon: {
    color: Colors.icon.location.picker,
    fontSize: 40,
  },
});
