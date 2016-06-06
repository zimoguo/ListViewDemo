import React, {Component} from 'react'

import {
  Text,
} from 'react-native'

export default class  Detail extends Component {

  props: {
    dataSource: any,
  }

  render(){
    return(
      <Text>{this.props.dataSource.iconName}</Text>
    );
  }
}
