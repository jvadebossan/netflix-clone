import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Card from '../../components/Card';
import {Category, filter_category, categories} from '../../components/Category';

function Home() {
  return (
    <>
      <Header/>
      <Banner image={'home'}/>
      <Container>
        {categories.map((cat, indexx) => 
          <Category title={cat} key={indexx}>
            {filter_category(indexx).map((video, index) => <Card video_id={video.id} key={index}/>)}
          </Category>
        )}
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
