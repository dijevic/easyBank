import { fetchHelper } from "../helpers/fetch"

export const updateArticleService = async (formData, setArticles, id, setTableElements, toast) => {
    try {
        const resp = await fetchHelper(formData, 'PUT', id)
        const data = await resp.json()


        if (data.data) {

            setArticles(prev => prev.map(item => (item.id === id) ? { date: item.date, ...data.data, id } : item))
            setTableElements(prev => prev.map(item => (item.id === id) ? { date: item.date, ...data.data, id } : item))
            toast('Article updated')

        } else {
            toast('something went wrong')
        }



    } catch (e) {
        console.log(e)
    }


}