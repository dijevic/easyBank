import { fetchHelper } from "../helpers/fetch"

export const deleteArticleService = async (setArticles, id, setTableElements, toast) => {

    toast.info('Deleting...')
    try {


        const resp = await fetchHelper('', 'DELETE', id)

        const data = await resp.json()

        if (data.data) {
            setArticles(prev => prev.filter(item => item.id !== id))
            setTableElements(prev => prev.filter(item => item.id !== id))
            toast.clearWaitingQueue()

            toast.success('Article Deleted')


        } else {
            toast.error('Something went wrong')

        }




    } catch (e) {
        console.log(e)

    }



}