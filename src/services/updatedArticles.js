import { fetchHelper } from "../helpers/fetch"

export const updateArticleService = async (formData, setArticles, id, setTableElements, toast) => {

    toast.info('updating...')

    try {


        const resp = await fetchHelper(formData, 'PUT', id)
        const data = await resp.json()


        if (data.data) {

            setArticles(prev => prev.map(item => (item.id === id) ? { date: item.date, ...data.data, id } : item))
            setTableElements(prev => prev.map(item => (item.id === id) ? { date: item.date, ...data.data, id } : item))
            toast.clearWaitingQueue()
            toast.success('Article updated')

        } else {
            toast.error('something went wrong')
        }



    } catch (e) {
        console.log(e)
    }


}