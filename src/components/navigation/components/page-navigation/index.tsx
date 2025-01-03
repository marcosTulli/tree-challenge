import React from 'react';
import { Button, Tooltip, Typography } from '@mui/material';
import useSideBar from '../../hooks/useSidebar';
import * as pages from '@pages/index';
import { useNavigate } from 'react-router-dom';
import { slugify } from '@/utils';

const PageNavigation: React.FC = () => {
	const { isSideBarOpen, toggleSideBar } = useSideBar();
	const pagesArray = Object.keys(pages);
	const navigate = useNavigate();

	return (
		<>
			{pagesArray
				.filter((page) => page !== 'NotFound')
				.map((page) => {
					const handleClick = () => {
						// eslint-disable-next-line @typescript-eslint/no-unused-expressions
						isSideBarOpen && toggleSideBar();
						navigate(`/${slugify(page)}`);
					};

					return (
						<Tooltip key={page} title={page}>
							<Button sx={{ color: 'secondary.main' }} onClick={handleClick}>
								<Typography sx={{ fontSize: '1rem' }}>{page}</Typography>
							</Button>
						</Tooltip>
					);
				})}
		</>
	);
};

export default PageNavigation;
