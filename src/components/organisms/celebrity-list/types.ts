export interface CelebrityListProps {
    isFeatured: boolean,
    celebrities: Celebrity[],
    heading: string,
    onPressCelebrity: () => void
}

interface Celebrity {
    name: string,
    description: string,
    price: string,
    unit: string,
    profilePicture: string,
}