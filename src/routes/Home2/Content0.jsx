import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}>

          <p
            key="content"
            className="title1"
            id={`${props.id}-content`}>
            科技让消费体验更美好
          </p>

          <p
            key="content2"
            className="title2"
            id={`${props.id}-content`}>
            新零售 新服务
        </p>
        </QueueAnim>
        <QueueAnim
          type={['right', 'left']}
          delay={300}
          key="menu"
          id={`${props.id}-menu`}>
          <div className="menu" key="menu">
          <QueueAnim
          type={['right', 'left']}
          delay={300}
          key="menu"
          id={`${props.id}-menu`}>
            <div className="item item-1" key="a">
              <div className="item-icon icon-tiyu"></div>
              <div className="item-title">体育</div>
            </div>
            <div className="item item-2" key="b">
              <div className="item-icon icon-tiyu"></div>
              <div className="item-title">零售</div>
            </div>
            <div className="item item-3" key="c">
              <div className="item-icon icon-tiyu"></div>
              <div className="item-title">儿童</div>
            </div>
            <div className="item item-4" key="d">
              <div className="item-icon icon-tiyu"></div>
              <div className="item-title">餐饮</div>
            </div>
            </QueueAnim>
          </div>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
