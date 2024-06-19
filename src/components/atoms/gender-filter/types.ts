export interface GenderFilterProps {
    filterType: 'men' | 'women',
    onPressFilter: (filterType: 'men' | 'women') => void
}