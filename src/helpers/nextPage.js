export const nextPage = (articles, activedPage, setTableElements) => {


    const nextPageArray = []

    for (let i = activedPage * 6 - 6; i < activedPage * 6 && i < articles.length; i++) {
        nextPageArray.push(articles[i])
    }



    setTableElements(nextPageArray)

}