export const updateCategory = (category) => {
    return (dispach) => {
        dispach({
            type : "updateCategory",
            payload : category
        })
    }
}