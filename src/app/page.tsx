

import ArticleItem from "@/Components/article-item";
import PageTitle from "@/Components/pageTitle"; 
import { NavBar } from "@/app/nav-bar";


export default function page() {
  
  return (
    <>
     { NavBar() }
        <section> 
        <PageTitle title="home" />
      <div className="container mx-auto grid gap-5 grid-cols-fluid pt-5">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>

        </section>
          </>
  );
}
