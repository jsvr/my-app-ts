import * as React from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { HomeWraper } from './styled';

const itemsArray: any = [
  { name: 'test1', text: 'text1', detail: 'tetail1' },
  { name: 'test2', text: 'text2', detail: 'tetail2' },
  { name: 'test3', text: 'text3', detail: 'tetail3' },
];
const pushData: any = [
  { name: 'test4', text: 'text1', detail: 'tetail1' },
  { name: 'test5', text: 'text2', detail: 'tetail2' },
  { name: 'test6', text: 'text3', detail: 'tetail3' },
];

// 气泡加list
// dropdown 点击加载更多会关闭，也有可能是滚动加载更多



const popContainer = document.getElementById('area');
const Index: React.FunctionComponent<any> = () => {
  const [data, setData] = React.useState(itemsArray);
  const [show, setShow] = React.useState(false);
  const [dom, setDom] = React.useState<HTMLDivElement | null>(null);
  const dwRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    dwRef.current = document.getElementsByClassName('ul-wraper')[0] as HTMLDivElement;
    console.log(dwRef.current);
    document.body.addEventListener('click', (e) => {
      // if (e.target && e.target.('#m-btn')) { 
      //   return; 
      // }
      console.log(e.target);          
      console.log('body');

    });
    return () => {
      setData(itemsArray)
    }
  }, []);

  const handleOnScroll = () => {
    if (dom) {
      const contentScrollTop = dom.scrollTop; //滚动条距离顶部
      const clientHeight = dom.clientHeight; //可视区域
      const scrollHeight = dom.scrollHeight; //滚动条内容的总高度
      if (contentScrollTop + clientHeight >= scrollHeight) {
        console.log('frank');
      }
    }
  };
  const items = (
    <>
      {data.map((item: any, index: number) =>
        <Menu.Item key={`item${index}`}>
          {console.log(item, 'item')}
          <span>{item.name}</span>
          <span>{item.text}</span>
          <span>{item.detail}</span>
        </Menu.Item>
      )}
    </>
  );
  console.log(items);
  const menu = (
    <Menu>
      <Menu.Item key={'header'}>
        <div className="dropdown-heeader">未读消息5条</div>
      </Menu.Item>
      {items}
      <Menu.Item key={'footer'}>
        <div onClick={() => { setData([...data, ...pushData]) }} className="dropdown-footer">加载更多</div>
      </Menu.Item>
    </Menu>
  );


  return (
    <HomeWraper>
      <Space direction="vertical" size={[8, 16]}>
        <Space wrap>
          <Dropdown
            getPopupContainer={triggerNode => triggerNode.parentNode as HTMLElement}
            className="msg-dropdown"
            overlay={menu}
            visible={show}
            destroyPopupOnHide={false}
            overlayClassName="ul-wraper"
            placement="bottomRight">
            <Button onClick={() => { setShow(!show) }}>topRight</Button>
          </Dropdown>
        </Space>
      </Space>
    </HomeWraper>
  );
};

export default Index;

