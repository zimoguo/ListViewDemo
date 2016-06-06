import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';

import Detail from './Detail.js'

class  ListViewItem extends Component {

  props: {
    navigator: Navigator,
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
      <TouchableHighlight onPress={() => this._onPressItem('Detail',Detail)}>
        <View>
          <Text>{this.props.dataSource.iconName}</Text>
          <View style={styles.container}>
            <Image source = {this.props.dataSource.imageOneUrl} style={styles.image} />
            <Image source = {this.props.dataSource.imageTwoUrl} style={styles.image} />
            <Image source = {this.props.dataSource.imageThreeUrl} style={styles.image} />
          </View>
          <TouchableHighlight onPress={() => this._onPressImage(this.state.count)}>
            <Image source = {this.props.dataSource.imageFourUrl} style={styles.image} />
          </TouchableHighlight>
          <Text>{this.state.count}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onPressItem(name, component){
    this.props.navigator.push({
      name: name,
      component: component,
      params: {
        dataSource: this.props.dataSource,
      }
    });
  }

  _onPressImage(count) {
    this.setState({
      count: (count + 1),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
});

module.exports = ListViewItem
