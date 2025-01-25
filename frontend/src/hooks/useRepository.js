import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, loading, fetchMore, refetch } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    fetchMore: handleFetchMore,
    refetch,
  };
};

export default useRepository;
