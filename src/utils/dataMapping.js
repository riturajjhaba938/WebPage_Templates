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
        role: "Educator", 
        company: "VEDIFAI", 
        bio: "", 
        image: apiTeacher.profile_picture_url || 'https://ui-avatars.com/api/?name=User&background=cbd5e1&color=334155',
        trending: false,
        verified: true, 
        tags: [], 
        videoPreview: apiTeacher.video_preview || "",
        videoThumbnail: apiTeacher.video_thumbnail || "",
        reviews: [] 
    };
};
/**
 * Maps a course from the Public Landing API to the Frontend Course shape.
 * @param {Object} apiCourse - The course object from the API.
 * @returns {Object} The mapped course object.
 */
export const mapCourseToCard = (apiCourse) => {
    // Determine status from the first batch if available, otherwise default to 'active'
    let status = 'active';
    if (apiCourse.batches && apiCourse.batches.length > 0) {
        status = apiCourse.batches[0].status || 'active';
    } else if (apiCourse.status) {
        status = apiCourse.status;
    }

    return {
        ...apiCourse,
        image: apiCourse.thumbnail_url || apiCourse.image || 'https://via.placeholder.com/400x200?text=Course+Image',
        price: apiCourse.price || 'Free',
        priceValue: apiCourse.price_value || parseFloat(String(apiCourse.price).replace(/[^0-9.]/g, '')) || 0,
        status: status
    };
};
