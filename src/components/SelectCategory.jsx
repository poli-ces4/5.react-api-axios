import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesProvider';

const CATEGORIES = [
	{ value: 'business', label: 'Business' },
	{ value: 'entertainment', label: 'Entertainment' },
	{ value: 'general', label: 'General' },
	{ value: 'health', label: 'Health' },
	{ value: 'science', label: 'Science' },
	{ value: 'sports', label: 'Sports' },
	{ value: 'technology', label: 'Technology' },
];

const SelectCategory = () => {
	const { category, handleChangeCategory } = useContext(ArticlesContext);
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Age</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={category}
				label='Category'
				onChange={handleChangeCategory}
			>
				{CATEGORIES.map(category => (
					<MenuItem key={category.value} value={category.value}>
						{category.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SelectCategory;
