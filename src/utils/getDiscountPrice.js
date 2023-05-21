const discountPrice = (price) => {
    return (price - (price * 10) / 100).toFixed(2)
}
export default discountPrice