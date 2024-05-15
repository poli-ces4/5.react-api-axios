/* eslint-disable react/prop-types */
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Link,
	Typography,
} from '@mui/material';

const Article = ({ article }) => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{article.author}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{article.title}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link href={article.url} target='_blank' variant='button'>
						Read more
					</Link>
				</CardActions>
			</Card>
		</>
	);
};

export default Article;
