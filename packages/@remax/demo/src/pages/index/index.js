import React from 'react';
import Remax from '@remax/core';

import {
  List,
  Button,
} from '@remax/weui';

import {
  View,
} from '@remax/components';

import styles from './index.module.less';

// import Logo from '../components/logo';
import Test from '../components/Test';

class Component extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      b: 'ddddd'
    }
  }
  render(){
    console.log(this.state)
    return (
      <View>
        <Test b={this.state.b}/>
        {/*<Logo />
        <List title="组件" text="tabbar" url="weui-tabbar"/>
        <View onClick={()=>console.log(1111)}>testtest</View>
        <List text="button" url="weui-button"/>
        <List title="完整示例" text="react" url="demo"/>
        <View className={styles.btn}>
          <Logo />
    
          <Button openType="share" type="primary">分享</Button>
        </View>*/}
      </View>
    )
  }
}

Remax.render(<Component />);
