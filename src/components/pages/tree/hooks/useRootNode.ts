import { TreeServicesInstance } from '@/services';
import { useQuery } from '@tanstack/react-query';

const useRootNode = () => {
	const { data: rootNode, isLoading } = useQuery({
		queryKey: ['rootNode'],
		queryFn: TreeServicesInstance.getRootNode,
	});

	return { rootNode, isLoading };
};

export default useRootNode;
