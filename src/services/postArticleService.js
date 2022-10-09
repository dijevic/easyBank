import { fetchHelper } from "../helpers/fetch"

export const createArticleService = async (formData, setArticles, toast) => {
    try {
        const resp = await fetchHelper(formData, 'POST')
        const data = await resp.json()
        if (data.data) {

            setArticles(prev => [...prev, data.data])
            toast('Article Created')

        }




    } catch (e) {
        console.log(e)
    }



}