import { ArticlesPane, ExplorePage, Post, SearchBar, TopBar } from "./Components";


export function ExploreTab() {
  return (
    <ExplorePage>
      <TopBar>
        <h1>Explore</h1>
        <SearchBar></SearchBar>
      </TopBar>
      <ArticlesPane>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ArticlesPane>
    </ExplorePage>
  );
}
