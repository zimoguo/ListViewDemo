import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
} from 'react-native'

import ListViewItem from './ListViewItem'

class Index extends Component{
  constructor(){
    super();
  }

  componentWillMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    const item = {
      imageOneUrl: require('./images/image_one.jpeg'),
      imageTwoUrl: require('./images/image_two.jpeg'),
      imageThreeUrl: require('./images/image_three.jpeg'),
      imageFourUrl: require('./images/image_four.jpeg'),
      iconName: '图片1',
    };
    const dataList = [
       item ,
      {...item, iconName:'图片2'},
    ];
    this.state = {
      data: ds.cloneWithRows(dataList),
    };
  }

  render() {
    return(
      <ListView dataSource = {this.state.data}
       renderRow={(rowData) => this._renderRow(rowData)}/>
    );
  }

  _renderRow(rowData){
    return(
      <View>
        <ListViewItem dataSource = {rowData}/>
      </View>
    );
  }

}

module.exports = Index
