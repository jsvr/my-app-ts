import React, { useState } from 'react'
import { ScrollWraper } from './styled'

function DataInfo() {
  const itemsArray: any = [
    'aaaavaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aaaa',
    'aaaa',
    'aaaa',
    'aaaa',
    'aaaa'
  ];
  const pushData: any = [
    'aaaavaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aaaa',
    'aaaa',
    'aaaa',
    'aaaa',
    'aaaa'
  ];
  const [dom, setDom] = useState<HTMLDivElement | null>(null);
  const [logData, setLogData] = useState(itemsArray);

  // 获取数据的方法
  // function getLogPages () {
  //     ...
  // }

  // 监听页面滚动
  const handleOnScroll = () => {
    if (dom) {
      const contentScrollTop = dom.scrollTop; //滚动条距离顶部
      const clientHeight = dom.clientHeight; //可视区域
      const scrollHeight = dom.scrollHeight; //滚动条内容的总高度
      if (contentScrollTop + clientHeight >= scrollHeight) {
        // getLogPages();    // 获取数据的方法
        console.log('daodile');
        setLogData([...logData, ...pushData]);
      }
    }
  };
  return (
    <ScrollWraper
      ref={(dom) => {
        setDom(dom);
      }}
      onScrollCapture={() => handleOnScroll()}
    >
      {logData}
    </ScrollWraper>
  )
}

export default DataInfo;