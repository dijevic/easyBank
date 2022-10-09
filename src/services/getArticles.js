import { fetchHelper } from "../helpers/fetch"
import { pickSixElements } from "../helpers/pickSixElements"

export const getArticlesService = async (setArticles, setLoading, setTableElements) => {
    setLoading(true)
    try {
        const resp = await fetchHelper('', 'GET')
        const data = await resp.json()
        if (data.data) {
            await setArticles(data.data)
            pickSixElements(data.data, setTableElements)
            setLoading(false)
        } else {
            setLoading(false)

        }




    } catch (e) {
        setLoading(false)
        console.log(e)
    }



}