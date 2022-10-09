import { fetchHelper } from "../helpers/fetch"

export const deleteArticleService = async (setArticles, id, setTableElements, articles) => {
    try {


        await fetchHelper('', 'DELETE', id)

        setArticles(prev => prev.filter(item => item.id !== id))
        setTableElements(prev => prev.filter(item => item.id !== id))



    } catch (e) {
        console.log(e)
    }



}