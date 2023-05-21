import Tab from './Categories/Tab'

const Products = ({ product, setCategoryName }) => {
    return (
        <div className='my-24'>
            <h1 className='text-3xl font-bold text-center mb-8'>Products By Category</h1>
            <Tab setCategoryName={setCategoryName} products={product} />
        </div>
    )
}

export default Products