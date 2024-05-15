import { Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesProvider';
import Article from './Article';

const Articles = () => {
	const { articles } = useContext(ArticlesContext);
	return (
		<>
			<Typography variant='h3' align='center' marginY={5}>
				List Articles
			</Typography>
			<Grid container spacing={2}>
				{articles.map(article => (
					<Article key={article.publishedAt} article={article} />
				))}
			</Grid>
		</>
	);
};

export default Articles;
