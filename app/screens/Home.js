import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base currency');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton buttonText="HKD" onPress={this.handlePressBaseCurrency} />
        <InputWithButton
          buttonText="CNY"
          onPress={this.handlePressQuoteCurrency}
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;
