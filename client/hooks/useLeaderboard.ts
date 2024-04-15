// hook for useQuery for lb data

import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getLeaderboard } from '../apis/leaderboard.ts'

export function useLeaderboard() {
  const query = useQuery({ queryKey: ['leaderboard'], queryFn: getLeaderboard })
  return {
    ...query,
  }
}

// hook for useMutation to post score

export function useLeaderboardMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })

  return mutation
}
