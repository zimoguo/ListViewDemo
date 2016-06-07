import React, {Component} from 'react'

import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native'

import Dimensions from 'Dimensions'

const width = Dimensions.get('window').width;

export default class  Detail extends Component {

  props: {
    dataSource: any,
  }

  render(){
    return(
      <ScrollView>
        <Text>{this.props.dataSource.iconName}</Text>
        <Image source = {this.props.dataSource.imageOneUrl} style = {styles.image} />
        <Image source = {this.props.dataSource.imageTwoUrl} style = {styles.image} />
        <Image source = {this.props.dataSource.imageThreeUrl} style = {styles.image} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: width-20,
    height:200,
    margin: 10,
  },
});
