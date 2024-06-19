export interface CelebrityFiltersProps {
    filters: string[] | any,
    onSelectFilter: (index: number) => void
    selectedFilterIndex: number
}