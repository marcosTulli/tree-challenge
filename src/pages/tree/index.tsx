import React from 'react';
import Page from '@/components/common/page';
import { Header, Node, Dialogs } from '@/components/pages/tree/components';
import { useTree } from '@/components/pages/tree/hooks';
import { INode } from '@/models';
import { Typography } from '@mui/material';

const Tree: React.FC = () => {
	const { rootNode, isLoading } = useTree();

	return (
		<Page>
			<Header />
			{isLoading ? (
				<Typography color="secondary">Loading ...</Typography> // TODO: Implement Skeleton
			) : (
				<Node node={rootNode as INode} />
			)}
			<Dialogs />
		</Page>
	);
};

export default Tree;
