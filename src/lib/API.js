import axios from 'axios';

export default {
    async getBlogs() {
        const response = await axios.get('https://toymarketplaceapi.onrender.com/blogs');
        return response.data;
    },
    async getCategories() {
        const response = await axios.get('https://toymarketplaceapi.onrender.com/categories');
        return response.data;
    },
    async getCategory(id) {
        const response = await axios.get(`https://toymarketplaceapi.onrender.com/categories/${id}`);
        return response.data;
    },
    async getToyByCategory(categoryName) {
        const response = await axios.get(`https://toymarketplaceapi.onrender.com/subcategory/${categoryName}`);
        return response.data;
    },
    async getToysByLimit(pageNumber, limitPerPage, sortOrder) {
        const response = await axios.get(`https://toymarketplaceapi.onrender.com/toys?currentPage=${pageNumber}&limits=${limitPerPage}&sortOrder=${sortOrder}`);
        return response.data;
    },
    async addCategory(category) {
        const response = await axios.post('https://toymarketplaceapi.onrender.com/categories', category);
        return response.data;
    },
    async updateCategory(category) {
        const response = await axios.patch(`https://toymarketplaceapi.onrender.com/categories/${category.id}`, category);
        return response.data;
    },
    async deleteCategory(id) {
        const response = await axios.delete(`https://toymarketplaceapi.onrender.com/categories/${id}`);
        return response.data;
    },
    async featuredToys() {
        const response = await axios.get('https://toymarketplaceapi.onrender.com/featuredToys');
        return response.data;
    },
    async getToy(id) {
        const response = await axios.get(`https://toymarketplaceapi.onrender.com/toys/${id}`);
        return response.data;
    },
    async getToy(id) {
        const response = await axios.get(`https://toymarketplaceapi.onrender.com/toys/${id}`);
        return response.data;
    },
    async addToy(toy) {
        const response = await axios.post('https://toymarketplaceapi.onrender.com/toys', toy);
        return response.data;
    },
    async updateToy(id,toy) {
        const response = await axios.patch(`https://toymarketplaceapi.onrender.com/toys/${id}`, toy);
        return response.data;
    },
    async deleteToy(id) {
        const response = await axios.delete(`https://toymarketplaceapi.onrender.com/toys/${id}`);
        return response.data;
    },
    async getToys() {
        const response = await axios.get('https://toymarketplaceapi.onrender.com/toys');
        return response.data;
    },
    async getToysByEmail(email) {
        const response = await axios.get(`https://toymarketplaceapi.onrender.com/mytoy/${email}`);
        return response.data;
    }
}
