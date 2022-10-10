export const pickSixElements = (articles = [], setTableElements) => {

    const tableArticles = []


    if (articles.length <= 6) {

        for (let i = 0; i < articles.length; i++) {
            tableArticles.push(articles[i])

        }

        setTableElements(tableArticles)
    } else {
        for (let i = 0; i < 6; i++) {

            tableArticles.push(articles[i])


        }

        setTableElements(tableArticles)


    }


}