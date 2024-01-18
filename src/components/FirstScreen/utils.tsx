import { MOCK_TOURS, BackendTour, DEFAULT_MEMBERS_OPTION, LOCATIONS } from './constants'
import { Option } from './Select/Select'

const getTour = (location: string | null): BackendTour => {
  return MOCK_TOURS.find((tour: BackendTour) => tour.location === location) as BackendTour
}

const getRangeOptions = (range: [number, number]): Option[] => {
  const [minMembers, maxMembers] = range

  const count = []

  for (let i = minMembers; i < maxMembers + 1; i++) {
    count.push(i)
  }

  return count.map((count) => ({ value: `${count}`, text: `${count}` }))
}

export const getOptions = (location: string | null): Option[] => {
  if (!location) {
    return [DEFAULT_MEMBERS_OPTION]
  }

  const tour = getTour(location)

  const restOptions = getRangeOptions(tour.membersRange)

  return [DEFAULT_MEMBERS_OPTION, ...restOptions]
}

export const getLabel = (location: string | null): string => {
  if (!location) {
    return 'количество зависит от направления'
  }

  const [minMembers, maxMembers] = getTour(location).membersRange
  let result = ''

  if (minMembers === maxMembers) {
    result = `только для ${maxMembers} человек`
  } else if (minMembers === 1) {
    result = `максимум ${maxMembers} человек`
  } else if (minMembers > 1) {
    result = `не меньше ${minMembers} человек`
  }

  return result
}

export const isRangeContainsMembers = (members: string | null, location: string): boolean => {
  const [minMembers, maxMembers] = getTour(location).membersRange

  const membersCount = Number(members)

  const isContain = membersCount >= minMembers && membersCount <= maxMembers

  return !!membersCount && isContain
}

export const getDefaultMembersCount = (location: string): string | null => {
  const [minMembers, maxMembers] = getTour(location).membersRange

  if (minMembers === maxMembers) {
    return minMembers.toString()
  } else {
    return null
  }
}

export const getLocation = (value: string): string => {
  const location = LOCATIONS.find((loc) => loc.value === value)
  return location?.text as string
}
