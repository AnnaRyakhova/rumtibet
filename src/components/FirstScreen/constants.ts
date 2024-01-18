export const LOCATIONS = [
  {
    value: '',
    text: 'Локация для тура',
    disabled: true,
  },
  {
    value: 'Beijing',
    text: 'Пекин',
  },
  {
    value: 'Lhasa',
    text: 'Лхаса',
  },
  {
    value: 'Shanghai',
    text: 'Шанхай',
  },
]

export type BackendTour = {
  location: string
  membersRange: [number, number]
}

export const MOCK_TOURS: BackendTour[] = [
  {
    location: 'Beijing',
    membersRange: [1, 6],
  },
  {
    location: 'Shanghai',
    membersRange: [4, 8],
  },
  {
    location: 'Lhasa',
    membersRange: [4, 4],
  },
]

export interface Form {
  location: string
  members: string
  startDate: Date | null
  endDate: Date | null
}

export const INITIAL_FORM: Form = {
  location: '',
  members: '',
  startDate: null,
  endDate: null,
}

export const DEFAULT_MEMBERS_OPTION = { value: '', text: 'Участники', disabled: true }
