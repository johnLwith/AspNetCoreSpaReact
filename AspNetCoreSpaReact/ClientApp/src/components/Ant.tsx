import React, { Component } from 'react';
import { Button } from 'antd';

type MyProps = {};
type MyState = { };

export class Ant extends Component<MyProps, MyState> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
