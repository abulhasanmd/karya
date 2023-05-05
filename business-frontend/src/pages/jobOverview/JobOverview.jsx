/* eslint-disable function-paren-newline */
import * as React from 'react';
import { Divider, Typography, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import MenuBar from '../../components/menubar/MenuBar';

import './JobOverview.css';
import JobProposalCard from '../../components/jobProposalCard/JobProposalCard';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProposalCreator from '../../components/proposalCreator/ProposalCreator';

export default function JobOverview() {
	let { id } = useParams();
	const token = useSelector((state) => state.user.token);
	const [job, setJob] = useState('');
	const [trigger, setTrigger] = useState('');
	console.log('id is', id);

	useEffect(() => {
		axios
			.get(`${API_URL}/users/get-job?jobId=${id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => {
				console.log('response is', response.data.message);
				setJob(response.data.message);
			});
	}, [trigger]);

	return (
		<div>
			<MenuBar />
			<div className="jo-main-container">
				<div className="jo-details">
					<div className="bso-name">
						<Typography
							variant="h2"
							noWrap
							component="h2"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'National Bold',
								fontWeight: 900,
								fontStyle: 'normal',
								fontSize: '32px',
								// letterSpacing: '.3rem',
								color: 'primary',
							}}
						>
							{job.name}
						</Typography>

						<Typography
							sx={{
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'National',
								fontStyle: 'normal',
								fontSize: '14px',
							}}
							color="text.secondary"
						>
							{job.proposals ? job.proposals.length : 0} Active
							Proposals
						</Typography>
					</div>
					<Divider />
					<div className="bso-details-highlights">
						<div>
							<Typography
								variant="h4"
								noWrap
								component="h4"
								sx={{
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'National Bold',
									fontWeight: 600,
									fontStyle: 'normal',
									fontSize: '18px',
									// letterSpacing: '.3rem',
									color: 'primary',
								}}
							>
								Description
							</Typography>
						</div>
						<br />
						<div>
							<Typography
								variant="p"
								sx={{
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'National',
									fontWeight: 400,
									fontStyle: 'normal',
									fontSize: '18px',
									// letterSpacing: '.3rem',
									color: 'text.secondary',
								}}
							>
								{job.description}
							</Typography>
						</div>
					</div>
					<Divider />
					<div className="bso-details-highlights">
						<div>
							<Typography
								variant="h4"
								noWrap
								component="h4"
								sx={{
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'National Bold',
									fontWeight: 600,
									fontStyle: 'normal',
									fontSize: '18px',
									// letterSpacing: '.3rem',
									color: 'primary',
								}}
							>
								Estimates and Budget
							</Typography>
						</div>
						<br />
						<div>
							<List dense>
								<ListItem>
									<ListItemText
										primaryTypographyProps={{
											sx: {
												fontFamily: 'National Bold',
												fontWeight: 600,
												fontStyle: 'normal',
												fontSize: '15px',
											},
										}}
										secondaryTypographyProps={{
											sx: {
												fontFamily: 'National Bold',
												fontWeight: 400,
												fontStyle: 'normal',
												color: 'text.secondary',
											},
										}}
										primary={'Estimated Time'}
										secondary={
											job.estimatedTime + ' hour(s)'
										}
									/>
								</ListItem>
								,
								<ListItem>
									<ListItemText
										primaryTypographyProps={{
											sx: {
												fontFamily: 'National Bold',
												fontWeight: 600,
												fontStyle: 'normal',
												fontSize: '15px',
											},
										}}
										secondaryTypographyProps={{
											sx: {
												fontFamily: 'National Bold',
												fontWeight: 400,
												fontStyle: 'normal',
												color: 'text.secondary',
											},
										}}
										primary={'Estimated Hourly Budget'}
										secondary={
											job.estimatedHourlyBudget + ' $'
										}
									/>
								</ListItem>
								,
								<ListItem>
									<ListItemText
										primaryTypographyProps={{
											sx: {
												fontFamily: 'National Bold',
												fontWeight: 600,
												fontStyle: 'normal',
												fontSize: '15px',
											},
										}}
										secondaryTypographyProps={{
											sx: {
												fontFamily: 'National Bold',
												fontWeight: 400,
												fontStyle: 'normal',
												color: 'text.secondary',
											},
										}}
										primary={'Estimated Budget'}
										secondary={job.estimatedBudget + ' $'}
									/>
								</ListItem>
							</List>
						</div>
					</div>
					<Divider />
					{job.acceptedProposal && (
						<div className="bso-details-highlights">
							<div>
								<Typography
									variant="h4"
									noWrap
									component="h4"
									sx={{
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'National Bold',
										fontWeight: 600,
										fontStyle: 'normal',
										fontSize: '18px',
										// letterSpacing: '.3rem',
										color: 'primary',
									}}
								>
									{'Accepted Proposal'}
								</Typography>
							</div>
							<JobProposalCard
								proposal={job.acceptedProposal}
								isAccepted={true}
							/>
						</div>
					)}
					{!job.acceptedProposal && (
						<div className="bso-details-highlights">
							<div>
								<Typography
									variant="h4"
									noWrap
									component="h4"
									sx={{
										display: { xs: 'none', md: 'flex' },
										fontFamily: 'National Bold',
										fontWeight: 600,
										fontStyle: 'normal',
										fontSize: '18px',
										// letterSpacing: '.3rem',
										color: 'primary',
									}}
								>
									{'Proposals'}
								</Typography>
							</div>
							{job.proposals &&
								job.proposals.map((j) => (
									<JobProposalCard
										proposal={j}
										trigger={setTrigger}
									/>
								))}
						</div>
					)}
				</div>
				<div className="jo-side-card">
					<Paper
						sx={{
							width: '300px',
							padding: '15px',
						}}
					>
						<ProposalCreator job={job} />
						<Divider />
					</Paper>
				</div>
			</div>
		</div>
	);
}

/*
				<div className="jo-side-card">
					<Paper
						sx={{
							width: '300px',
							padding: '15px',
						}}
					>
						<ProposalCreator />
						<Divider />
					</Paper>
				</div>
*/