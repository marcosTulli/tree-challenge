import React from 'react';
import Page from '@/components/common/page';
import { Header, Node, Dialogs } from '@/components/pages/tree/components';
import { useTree } from '@/components/pages/tree/hooks';

const Tree: React.FC = () => {
	const { rootNode } = useTree();
	return (
		<Page>
			<Header />
			<Node node={rootNode} />
			<Dialogs />
		</Page>
	);
};

export default Tree;
