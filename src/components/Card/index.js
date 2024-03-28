import styles from './Card.module.css';

function Card({video_id}) {
	return (
		<div className={styles.card}>
			<a
				href={`https://www.youtube.com/watch?v=${video_id}`}
				rel='noreferrer noopener'
				target='_blank'>
					<img
						src={`https://img.youtube.com/vi/${video_id}/mqdefault.jpg`}
						alt="capa"></img>
        </a>
				
		</div>
	)
}

export default Card;