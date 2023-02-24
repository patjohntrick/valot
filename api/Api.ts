import { useQuery } from 'react-query';

const BASE_URL = 'https://valorant-api.com/v1';

export const getAgents = () => {
  const { data, error, isLoading } = useQuery('Agents', () =>
    fetch(`${BASE_URL}/agents`).then((res) => res.json())
  );
  return { data, error, isLoading };
};
