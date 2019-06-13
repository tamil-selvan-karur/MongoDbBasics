const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Problem connecting to MongoDB', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

async function createCourse() {
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: 'Angular Course',
        author: 'Tamilselvan',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    const result = await course.save();
    console.log(result);
}

createCourse();