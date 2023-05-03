/* eslint-disable no-shadow */
import * as React from 'react';
import Typography from '@mui/material/Typography';

// import MenuBar from '../../components/menubar/MenuBar';
import JobCardView from '../../components/jobCardView/JobCardView';
import './JobsListingPage.css';

export default function JobsListingPage() {
	return (
		<div>
			<div className="jl-main-container">
				<div></div>
				<div className="sr-result-cards">
					<Typography
						variant="h2"
						noWrap
						component="h2"
						sx={{
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'National Bold',
							fontWeight: 700,
							fontStyle: 'normal',
							fontSize: '28px',
							// letterSpacing: '.3rem',
							color: '#2b4450',
						}}
					>
						Relevant jobs near you.
					</Typography>
					<JobCardView />
					<JobCardView />
					<JobCardView />
				</div>
			</div>
		</div>
	);
}
