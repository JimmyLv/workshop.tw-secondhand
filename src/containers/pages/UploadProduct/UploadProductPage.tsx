import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {push} from "react-router-redux";
import NavBar from "antd-mobile/es/nav-bar/index.web";
import InputItem from "antd-mobile/es/input-item/index.web";
import TextareaItem from "antd-mobile/es/textarea-item/index.web";
import ImagePicker from "antd-mobile/es/image-picker/index.web";

const UploadProductPage = (props: DispatchProp<object> & RouteComponentProps<object>) => (

  <div>
    <NavBar mode="light"
            leftContent={<img src="./back.svg"></img>}
            onLeftClick={() => props.dispatch(push('/'))}>上传宝贝</NavBar>

    <InputItem placeholder="点击上传图片" editable={false}/>

    <ImagePicker></ImagePicker>

    <InputItem
      placeholder="商品名称"
      editable={true}
    ></InputItem>

    <br/>

    <InputItem
      placeholder="售价"
      editable={true}
    ></InputItem>

    <br/>

    <TextareaItem placeholder="添加描述..." rows={3}/>

    <button className="upload-btn" onClick={() => alert('出售')}>开始出售</button>
  </div>
);

export default connect()(UploadProductPage);
