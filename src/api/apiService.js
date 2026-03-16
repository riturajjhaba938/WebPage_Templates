const BASE_URL = 'http://localhost:3002/api/v1/public/landing';

/**
 * Service to handle VEDIFAI Public Landing API requests.
 */
const apiService = {
    /**
     * Fetches courses and batches with optional filters.
     * @param {Object} params - Filter parameters (page, limit, category, level, mode).
     * @returns {Promise<Object>} The API response containing courses and pagination data.
     */
    async getCoursesAndBatches(params = {}) {
        const queryParams = new URLSearchParams();
        
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== 'All') {
                queryParams.append(key, value);
            }
        });

        const url = `${BASE_URL}/courses?${queryParams.toString()}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch courses');
            }
            return await response.json();
        } catch (error) {
            console.error('API Error (getCoursesAndBatches):', error);
            throw error;
        }
    },

    /**
     * Fetches teachers with optional filters.
     * @param {Object} params - Filter parameters (page, limit, mode).
     * @returns {Promise<Object>} The API response containing teachers and pagination data.
     */
    async getTeachers(params = {}) {
        const queryParams = new URLSearchParams();
        
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== 'All') {
                queryParams.append(key, value);
            }
        });

        const url = `${BASE_URL}/teachers?${queryParams.toString()}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch teachers');
            }
            return await response.json();
        } catch (error) {
            console.error('API Error (getTeachers):', error);
            throw error;
        }
    }
};

export default apiService;
