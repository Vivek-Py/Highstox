import Holdings from "../screens/Holdings";

interface IMapping {
    [key: string]: React.FC
}

const mapping:IMapping = {
    holdings: Holdings
}

export default mapping;