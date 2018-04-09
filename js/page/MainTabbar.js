
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class MainTabbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_polular',
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_polular'}
                title="最热"
                selectedTitleStyle={{color:'red'}}
                renderIcon={() => <Image style={styles.Image} source={require('./../../res/images/ic_polular.png')} />}
                renderSelectedIcon={() => <Image style={[styles.Image,{tintColor:'red'}]} source={require('./../../res/images/ic_polular.png')} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'tb_polular' })}>
                <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_trending'}
                title="趋势"
                selectedTitleStyle={{color:'purple'}}
                renderIcon={() => <Image style={styles.Image} source={require('./../../res/images/ic_trending.png')} />}
                renderSelectedIcon={() => <Image style={[styles.Image,{tintColor:'purple'}]} source={require('./../../res/images/ic_trending.png')} />}
                //renderBadge={() => <CustomBadgeView />}
                onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                <View style={styles.page2}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_favorite'}
                title="喜欢"
                selectedTitleStyle={{color:'red'}}
                renderIcon={() => <Image style={styles.Image} source={require('./../../res/images/ic_favorite.png')} />}
                renderSelectedIcon={() => <Image style={[styles.Image,{tintColor:'red'}]} source={require('./../../res/images/ic_favorite.png')} />}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_my'}
                title="我的"
                selectedTitleStyle={{color:'purple'}}
                renderIcon={() => <Image style={styles.Image} source={require('./../../res/images/ic_my.png')} />}
                renderSelectedIcon={() => <Image style={[styles.Image,{tintColor:'purple'}]} source={require('./../../res/images/ic_my.png')} />}
                onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                <View style={styles.page2}></View>
            </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
      flex:1,
      backgroundColor: 'red',
  },
  page2: {
    flex:1,
    backgroundColor: 'purple',
  },
  Image:{
      width: 22,
      height: 22,
  }

});

AppRegistry.registerComponent('MyPop40', () => MyPop40);
