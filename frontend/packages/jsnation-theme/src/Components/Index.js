import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "./Link";
import List from "./List";
import Post from "./Post";
import Page from "./Page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      <Global
        styles={css`
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            html {
                font-family: sans-serif;
            `}
      />
      <Header isPostType={data.isPostType}>
        <HeaderContent>
        <h1>Frontity Workshop</h1>
        <p>Current URL: {state.router.link}</p>
        <Menu>
          <Link href="/">Home</Link>
          <Link href="/page/2">Posts II</Link>
          <Link href="/lorem-ipsum">Posts III</Link>
          <Link href="/page/3">Posts IV</Link>
        </Menu>
        </HeaderContent>
      </Header>
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </Main>
    </div>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: #eee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? 'lightseagreen' : 'maroon'};
`;

const HeaderContent = styled.div`
    max-width: 800px;
    padding: 1em;
    margin: auto;
   `
const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > div {
        margin-right: 1em;
    }
`

const Main = styled.main`
    max-width: 800px;
    padding: 1em;
    margin: auto;

    img {
        max-width: 100%
    }
    h2{
        margin: 0.5em 0;
    }
    p{
        line-height: 1.25em;
        margin-bottom: 0.75em;
    }        
`
