import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';

import Model from './Model';

class  ListViewItem extends Component {

  props: {
    dataSource: any,
  }

  state: {
    count: number,
  }

  componentWillMount() {
    this.state = {
      count: 0,
    }
  }

  render(){
    return(
      <View>
        <Text>{this.props.dataSource.iconName}</Text>
        <Image source = {this.props.dataSource.imageOneUrl} style={styles.image} />
        <Image source = {this.props.dataSource.imageTwoUrl} style={styles.image} />
        <Image source = {this.props.dataSource.imageThreeUrl} style={styles.image} />
        <TouchableHighlight onPress={() => this._onPressImage(this.state.count)}>
          <Image source = {this.props.dataSource.imageFourUrl} style={styles.image} />
        </TouchableHighlight>
        <Text>{this.state.count}</Text>
      </View>
    );
  }

  _onPressImage(count) {
    this.setState({
      count: (count + 1),
    });
  }
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 200,
    resizeMode: 'cover',
  }
});

module.exports = ListViewItem