/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import NavBar from '../component/NavBar'
import MyWebView from '../component/MyWebView'

export default class Discover extends Component {
  constructor(props){
      super(props)
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar title="发现" />
        <MyWebView
          source={{uri: 'https://weibo.com/?category=1760'}}
          domStorageEnabled={true}
          javaScriptEnabled={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  webview_style: {
    flex: 1
  }
})
