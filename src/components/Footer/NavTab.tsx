import * as React from "react";
import TabBar from 'antd-mobile/es/tab-bar/index.web'

export class NavTab extends React.Component {
  render() {
    return (<TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white">
      <TabBar.Item
        icon={require('./home.png')}
        title=""
        key="我的"
      >
      </TabBar.Item>
      <TabBar.Item key="add" title="" icon={require('./plus.png')} onPress={() => alert('add')}>
      </TabBar.Item>
      <TabBar.Item key="profile" title="" icon={require('./person.png')} onPress={() => alert('profile')}>
      </TabBar.Item>
    </TabBar>);
  }
}
