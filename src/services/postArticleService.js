import { fetchHelper } from "../helpers/fetch"

export const createArticleService = async (formData, setArticles, toast) => {
    try {
        const resp = await fetchHelper(formData, 'POST')
        const data = await resp.json()
        if (data.data) {

            setArticles(prev => [...prev, data.data])
            toast.info('Article Created')

        } else {
            toast.error('Something went wrong')

        }




    } catch (e) {
        console.log(e)
    }



}