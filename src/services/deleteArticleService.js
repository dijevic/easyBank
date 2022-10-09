import { fetchHelper } from "../helpers/fetch"

export const deleteArticleService = async (setArticles, id, setTableElements, articles, toast) => {
    try {


        const resp = await fetchHelper('', 'DELETE', id)

        const data = await resp.json()

        if (data.data) {
            setArticles(prev => prev.filter(item => item.id !== id))
            setTableElements(prev => prev.filter(item => item.id !== id))

            toast('Article Deleted')


        } else {
            toast('something went wrong')

        }




    } catch (e) {
        console.log(e)
    }



}