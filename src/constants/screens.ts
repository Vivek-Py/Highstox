interface IScreens  {
    name: string;
    component: string;
    options: {
        title: string;
        headerStyle?: {
            backgroundColor: string;
        }
    }
}
type TScreens = Array<IScreens>

const Screens: TScreens = [
    {
        name: 'holdings',
        component: 'holdings',
        options: {
            title: 'Upstox Holdings'
        }
    }
]

export default Screens;
export type { IScreens }