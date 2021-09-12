import styled from 'styled-components';

export const HomeWraper = styled.div.attrs({
  className: 'home-wraprer'
})`
  margin: 50px;
  .ant-dropdown-menu{
    overflow-y: auto;
    height: 106px;
  }
`;

export const ScrollWraper = styled.div.attrs({
  className: 'scroll-wraprer'
})`
  width: 200px;
  height: 60px;
  word-wrap: break-word;
  overflow-y: auto;
`;
