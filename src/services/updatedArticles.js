import { fetchHelper } from "../helpers/fetch"

export const updateArticleService = async (formData, setArticles, id, setTableElements) => {
    try {
        const resp = await fetchHelper(formData, 'PUT', id)
        const data = await resp.json()


        setArticles(prev => prev.map(item => (item.id === id) ? { date: item.date, ...data.data, id } : item))
        setTableElements(prev => prev.map(item => (item.id === id) ? { date: item.date, ...data.data, id } : item))


    } catch (e) {
        console.log(e)
    }


}