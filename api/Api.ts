import { useQuery } from 'react-query';

const BASE_URL = 'https://valorant-api.com/v1';

export const getAgents = () => {
  const { data, error, isLoading } = useQuery('Agents', () =>
    fetch(`${BASE_URL}/agents`).then((res) => res.json())
  );
  return { data, error, isLoading };
};

export const getAgent = (agentId: string) => {
  const { data, error, isLoading } = useQuery('Agent', () =>
    fetch(`${BASE_URL}/agents/${agentId}`).then((res) => res.json())
  );
  return { data, error, isLoading };
};

export const getMaps = () => {
  const { data, error, isLoading } = useQuery('Maps', () =>
    fetch(`${BASE_URL}/maps`).then((res) => res.json())
  );
  return { data, error, isLoading };
};

export const getWeapons = () => {
  const { data, error, isLoading } = useQuery('Weapons', () =>
    fetch(`${BASE_URL}/weapons`).then((res) => res.json())
  );
  return { data, error, isLoading };
};
