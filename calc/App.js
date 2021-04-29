/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default class Calc extends Component {
  state = {
    num1: 0,
    num2: 0,
    IMC: 0,
    messege: '',
  };
  click = () => {
    if (this.state.num1 == '' || this.state.num2 == '') {
      alert('Invalid Number');
      return;
    }
    const IMC =
      parseInt(this.state.num1) / Math.pow(parseInt(this.state.num2) / 100, 2);
    const survive = this.state;
    survive.IMC = parseFloat(IMC.toFixed(2));
    this.setState(survive);

    if (this.state.IMC <= 18.5) {
      survive.messege = 'MAGREZA';
      this.setState(survive);
    } else if (this.state.IMC <= 24.9) {
      survive.messege = 'NORMAL';
      this.setState(survive);
    } else if (this.state.IMC <= 29.9) {
      survive.messege = 'SOBREPESO';
      this.setState(survive);
    } else if (this.state.IMC <= 39.9) {
      survive.messege = 'OBESIDADE';
      this.setState(survive);
    } else if (this.state.IMC <= 40.0) {
      survive.messege = 'OBESIDADE GRAVE';
      this.setState(survive);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <View>
          <View>
            <Text style={styles.sectionTitle}>Calculadora de IMC </Text>
          </View>
          <View style={styles.sectionInputText}>
            <TextInput
              style={styles.sectionBoxInput}
              placeholder="Digite sua altura (em CM)"
              keyboardType={'numeric'}
              value={this.state.num2.toString()}
              onChangeText={num2 => {
                this.setState({num2});
              }}
            />
            <TextInput
              style={styles.sectionBoxInput}
              placeholder="Digite seu peso (em KG)"
              keyboardType={'numeric'}
              value={this.state.num1.toString()}
              onChangeText={num1 => {
                this.setState({num1});
              }}
            />
          </View>
          <View>
            <Button title="CALC" onPress={this.click} color="#049d00" />
          </View>
          <View>
            <Text placeholder="Result" style={styles.sectionResult}>
              IMC: {this.state.IMC}
            </Text>
          </View>
          <View>
            <Text placeholder="Result" style={styles.sectionResult}>
              Classificação: {this.state.messege}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#dddd',
    alignItems: 'center',
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
  },
  sectionResult: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
  },
  sectionFont: {
    marginTop: 20,
    fontSize: 10,
    fontWeight: '200',
    fontFamily: 'sans-serif-light',
    textAlign: 'left',
  },
  sectionBoxInput: {
    height: 40,
    width: 400,
    borderWidth: 1,
    borderColor: '#aaaaaa',
    margin: 5,
    padding: 10,
  },
});
