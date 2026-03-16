/**
 * Utility functions to map API data to frontend shapes.
 */

/**
 * Maps a teacher from the Public Landing API to the Frontend Mentor Card shape.
 * @param {Object} apiTeacher - The teacher object from the API.
 * @returns {Object} The mapped mentor object.
 */
export const mapTeacherToMentorCard = (apiTeacher) => {
    return {
        id: apiTeacher.id,
        name: apiTeacher.name || 'Anonymous Mentor',
        role: "Educator", // Default as approved
        company: "VEDIFAI", // Default as approved
        bio: "", // Placeholder
        image: apiTeacher.profile_picture_url || 'https://ui-avatars.com/api/?name=User&background=cbd5e1&color=334155',
        trending: false,
        verified: true, // Default as approved
        tags: [], // Placeholder
        videoPreview: apiTeacher.video_preview || "",
        videoThumbnail: apiTeacher.video_thumbnail || "",
        reviews: [] // Placeholder
    };
};
/**
 * Maps a course from the Public Landing API to the Frontend Course shape.
 * @param {Object} apiCourse - The course object from the API.
 * @returns {Object} The mapped course object.
 */
export const mapCourseToCard = (apiCourse) => {
    return {
        ...apiCourse,
        image: apiCourse.thumbnail_url || apiCourse.image || 'https://via.placeholder.com/400x200?text=Course+Image',
        price: apiCourse.price || 'Free',
        priceValue: apiCourse.price_value || parseFloat(String(apiCourse.price).replace(/[^0-9.]/g, '')) || 0,
        status: apiCourse.batches && apiCourse.batches.length > 0 ? apiCourse.batches[0].status : 'active'
    };
};
