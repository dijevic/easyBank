export const lastFourthArticles = (articles = [], setLatestArticles) => {

    const lastArticles = []

    if (articles.length <= 4) {
        setLatestArticles(articles)
        return
    }

    for (let i = articles.length - 1; i > articles.length - 5; i--) {
        lastArticles.push(articles[i])
    }


    setLatestArticles(lastArticles)




}