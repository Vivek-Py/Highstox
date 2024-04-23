import { useEffect } from "react"
import { Endpoints } from "../constants"
import useHoldingStore from "../store/holdings"

function useHoldingsData() {
    const {data, update: updateData} =  useHoldingStore()

    useEffect(() => {
        fetch(Endpoints.holdings)
        .then(res => res.json())
        .then(res => updateData(res.userHolding))
        .catch(err => updateData(null))
    }, [])
    return [data]
}

export default useHoldingsData;