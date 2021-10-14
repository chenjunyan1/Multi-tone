import React, { Component } from 'react';
import './Color.css';
import { Form } from 'semantic-ui-react';
export default class Color extends Component {
    constructor(props) {
        super(props)

        this.state = {
            r: 255,
            g: 255,
            b: 255,
            a: 1
        }
    }
    changeHandler = (e) => {
        let value = e.target.value;
        // 判断是不是透明&有没有负数或者超出
        if ([e.target.name] == "a" && (value < 0 || value > 1)) {
            value = 1;
            alert("透明度:0~1")
            // 判断rgb是否为负数或者超出
        } else if (value > 255 || value < 0) {
            value = 255;
            alert("RGB:0~255")
        }
        this.setState({ [e.target.name]: value });
    }

    render() {
        const { r, g, b, a } = this.state;
        const { Index } = this.props;
        return (
            <div className="main_color">
                <div className="index">
                    {Index}
                </div>
                <div className="lie">
                    <div className="liebiao">
                        <Form >
                            <Form.Field>
                                <div>Red</div>
                                <input placeholder='The value should be between 0 and 255' type="number" name="r" value={r} onChange={this.changeHandler} />
                            </Form.Field>
                            <Form.Field>
                                <div>Green</div>
                                <input placeholder='The value should be between 0 and 255' type="number" name="g" value={g} onChange={this.changeHandler} />
                            </Form.Field>
                            <Form.Field>
                                <div>Blue</div>
                                <input placeholder='The value should be between 0 and 255' type="number" name="b" value={b} onChange={this.changeHandler} />
                            </Form.Field>
                            <Form.Field>
                                <div>Alpha</div>
                                <input placeholder='The value should be between 0 and 1' type="number" name="a" value={a} onChange={this.changeHandler} />
                            </Form.Field>
                        </Form>
                    </div>
                    <div className="key" style={{ backgroundColor: "rgba(" + r + "," + g + "," + b + "," + a + ")" }}></div>
                </div>

                <div className="look">
                    RGBA: {r + ":" + g + ":" + b + ":" + a}
                </div>
            </div>
        )
    }
}
