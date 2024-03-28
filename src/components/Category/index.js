import style from './Category.module.css';
import videos from '../../jsons/videos.json'

const categories = [
  'Geografia',
  'Como fazer e usar',
  'Astronomia e Geografia',
  'Climatologia, Meteorologia, Vegetação',
  'Geologia e Hidrografia',
]

function filter_category(id){
  return videos.filter( video => video.category === categories[id])
}

function Category({ title, children }) {
	return (
		<>
			<h2 className={style.cat_title}>{title}</h2>
			<div className={style.category}>
				{children}
			</div>
		</>
	)
}

export {Category,  filter_category , categories};
