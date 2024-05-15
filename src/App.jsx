import { Container, Grid, Typography } from '@mui/material';
import ArticlesProvider from './context/ArticlesProvider';
import SelectCategory from './components/SelectCategory';
import Articles from './components/Articles';

const App = () => {
	return (
		<>
			<Container maxWidth='sm'>
				<header>
					<Typography variant='h3' component='h2' marginY={5}>
						News API
					</Typography>
				</header>
				<ArticlesProvider>
					<Grid
						container
						spacing={2}
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Grid item xs={12} md={6}>
							<SelectCategory />
						</Grid>
					</Grid>
					<Articles />
				</ArticlesProvider>
			</Container>
		</>
	);
};

export default App;
