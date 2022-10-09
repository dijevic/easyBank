import { fetchHelper } from "../helpers/fetch"

export const createArticleService = async (formData, setArticles) => {
    try {
        const resp = await fetchHelper(formData, 'POST')
        const data = await resp.json()


        setArticles(prev => [...prev, data.data])



    } catch (e) {
        console.log(e)
    }



}