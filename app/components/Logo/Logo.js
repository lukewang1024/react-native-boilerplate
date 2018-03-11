import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';

import styles from './styles';

const backgroundUri = require('./images/background.png');
const logoUri = require('./images/logo.png');

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground resizeMode="contain" source={backgroundUri} style={styles.containerImage}>
      <Image resizeMode="contain" source={logoUri} style={styles.image} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
