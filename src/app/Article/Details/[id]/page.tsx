import ArticleDetails from "@/Components/article-details";
import PageTitle from "@/Components/pageTitle"; 
import { NavBar } from "@/app/nav-bar";
export default function page() {
  return (
    <>
    
    {NavBar()}
        <section>  
      <PageTitle title="article details" />
      <ArticleDetails />
      
      </section>
    </>
  );
}
